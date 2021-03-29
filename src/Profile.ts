import { CCY } from "./CCY";
import { CryptoCurrency } from "./CryptoCurrency";
import { DB } from "./DB";
import { User } from "./User";

export class Profile {
    private db: DB
    private userId: number = null

    constructor(db: DB) {
        this.db = db
    }
    private isPermission() {
        if (this.userId) { return true } else {
            console.log('У вас нехвататет прав доступа Пожалуйста пройтидите авторизаци.')
            return false
        }
    }
    private getBalanceCrypto(name: string, isShort: boolean) {
        const allCrypto: CryptoCurrency[] = this.db.getCryptoByUserId(this.userId)
        const allCCY: CCY[] = this.db.getAllCCY()
        const findCurrency = allCCY.filter(CCY => CCY.getName().toUpperCase() === name.toUpperCase() || CCY.getShortName().toUpperCase() === name.toUpperCase())
        if (findCurrency.length > 0) {
            let balance: number = 0
            allCrypto.forEach(crypto => {
                if (crypto.getCCYId() === findCurrency[0].getId()) {
                    balance = isShort ? parseFloat(crypto.getBalance().toFixed(findCurrency[0].getNumberSight())) : crypto.getBalance()
                }
            })
            return balance

        }
    }

    login(mail: string, pass: string) {
        if (this.userId !== null) {
            console.log(`Вы уже авторизовались под пользователем id: ${this.userId}`)
        } else {
            let findUser = this.db.getAllUser().filter(user => user.getMail() === mail && user.getPass() === pass)
            if (findUser.length > 0) {
                this.userId = findUser[0].getId()
            } else console.log('Неверные данные пользователя')

        }
    }

    logOut() {
        this.userId = null
        console.log('Вы успешно вышли из системы')
    }

    newUser(mail: string, pass: string, nameRole: string) {
        let searchExistUser: User[] = this.db.getAllUser().filter(user => user.getMail() === mail)
        if (searchExistUser.length > 0) {
            console.log('Пользователь с такой mail уже существует')
        } else {
            let searchExistRole = this.db.getAllRole().filter(role => role.getNameRole() === nameRole)
            searchExistRole.length > 0 ? this.db.addUser(mail, pass, searchExistRole[0].getId()) : console.log('Роль с таким названием не найдена')
        }

    }
    getAllCrypto() {
        if (this.isPermission()) {
            return this.db.getCryptoByUserId(this.userId)
        }
    }
    getAllBalance() {
        if (this.isPermission()) {
            const allCrypto: CryptoCurrency[] = this.db.getCryptoByUserId(this.userId)
            let allBalance = 0
            allCrypto.forEach(crypto => {
                allBalance = allBalance + crypto.getBalance()
            })
            return allBalance
        }
    }

    printShortBalanceByKey(name: string) {
        if (this.isPermission) {
            return this.getBalanceCrypto(name, true)
        }
    }
    printFullBalanceByKey(name: string) {
        if (this.isPermission) {
            return this.getBalanceCrypto(name, false)
        }
    }
    getMaxBalance() {
        if (this.isPermission) {
            const allCrypto: CryptoCurrency[] = this.db.getCryptoByUserId(this.userId)
            let maxBalance: number = 0
            allCrypto.forEach(crypto => maxBalance = crypto.getBalance() > maxBalance ? crypto.getBalance() : maxBalance)
            return maxBalance
        }
    }
    getMinBalance() {
        if (this.isPermission) {
            const allCrypto: CryptoCurrency[] = this.db.getCryptoByUserId(this.userId)
            let minBalance: number = allCrypto[0].getBalance()
            allCrypto.forEach(crypto => minBalance = crypto.getBalance() > minBalance ? crypto.getBalance() : minBalance)
            return minBalance
        }
    }





}