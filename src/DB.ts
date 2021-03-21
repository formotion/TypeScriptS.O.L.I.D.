import { User } from './User'
import { CCY } from './CCY'
import { CryptoCurrency } from './CryptoCurrency'
import { Role } from './Role'
import { Common } from './abstract/Common'

export class DB {
    private users: User[]
    private CCY: CCY[]
    private CryptoCurrency: CryptoCurrency[]
    private Role: Role[]

    constructor() {
        this.users = []
        this.CCY = []
        this.CryptoCurrency = []
        this.Role = []
    }

    private generateId(arrayEntity: Common[]) {
        let id: number = arrayEntity.length > 0 ? arrayEntity[arrayEntity.length - 1].getId() + 1 : 0
        return id
    }
    private findById(id: number, arrEntity: Common[]) {
        let searchResult: Common[] = []
        arrEntity.forEach(element => {
            element.getId() === id && searchResult.push(element)
            return searchResult
        });
    }

    addUser(mail: string, pass: string, roleId: number) {
        this.users.push(new User(this.generateId(this.users), mail, pass, roleId,))
    }

    addCCY(name: string, shortName: string, numberSign: number) {
        this.CCY.push(new CCY(this.generateId(this.CCY), name, shortName, numberSign))
    }

    addCrypto(ccyId: number, balance: number) {
        this.CryptoCurrency.push(new CryptoCurrency(this.generateId(this.CryptoCurrency), ccyId, balance))
    }
    addRole(nameRole: string) {
        this.Role.push(new Role(this.generateId(this.Role), nameRole))
    }

    getAllUser() {
        return this.users
    }
    getUserById(id: number) {
        return this.findById(id, this.users)
    }

    getAllCCY() {
        return this.CCY
    }
    getCCYById(id: number) {
        return this.findById(id, this.CCY)
    }

    getAllCrypto() {
        return this.CryptoCurrency
    }
    getCryptoByUserId(id: number) {
        return this.findById(id, this.CryptoCurrency)
    }

    getAllRole() {
        return this.Role
    }
    getRoleById(id: number) {
        return this.findById(id, this.Role)
    }



}