import { User } from './User'
import { CCY } from './CCY'
import { CryptoCurrency } from './CryptoCurrency'
import { Role } from './Role'
import { Common } from './abstract/Common'
import { Order } from './Order'
import { OrderType } from './OrderType'

export class DB {
    private users: User[]
    private CCY: CCY[]
    private cryptoCurrency: CryptoCurrency[]
    private role: Role[]
    private orders: Order[]
    private orderTypes: OrderType[]

    constructor() {
        this.users = []
        this.CCY = []
        this.cryptoCurrency = []
        this.role = []
        this.orders = []
        this.orderTypes = []
    }

    private generateId(arrayEntity: Common[]) {
        let id: number = arrayEntity.length > 0 ? arrayEntity[arrayEntity.length - 1].getId() + 1 : 0
        return id
    }

    private findById(id: number, arrEntity: Common[]) {
        let searchResult = []
        arrEntity.forEach(element => {
            element.getId() === id && searchResult.push(element)

        });
        return searchResult
    }
    /**
     * Методы для работы с сущностью User
     */
    addUser(mail: string, pass: string, roleId: number) {
        this.users.push(new User(this.generateId(this.users), mail, pass, roleId,))
    }
    getAllUser():User[] {
        return this.users
    }
    getUserById(id: number) {
        return this.users.filter(user => {
            user.getId() === id
        })
    }
    removeUserById(id: number) {
        this.users = this.users.filter((user) => {
            user.getId() !== id
        })
    }
    /**
     * Методы для работы с сущностью CCY
     */
    addCCY(name: string, shortName: string, numberSign: number) {
        this.CCY.push(new CCY(this.generateId(this.CCY), name, shortName, numberSign))
    }
    getAllCCY() {
        return this.CCY
    }
    getCCYById(id: number) {
        return this.CCY.filter(CCY => CCY.getId() === id)
    }
    removeCCYById(id: number) {
        this.CCY = this.CCY.filter((CCY) => {
            CCY.getId() !== id
        })
    }

    /**
    * Методы для работы с сущностью Crypto
     */
    addCrypto(ccyId: number, balance: number) {
        this.cryptoCurrency.push(new CryptoCurrency(this.generateId(this.cryptoCurrency), ccyId, balance))
    }
    getAllCrypto() {
        return this.cryptoCurrency
    }
    getCryptoByUserId(id: number) {
        return this.cryptoCurrency.filter(crypto => crypto.getId() === id)
    }
    removeCryptoById(id: number) {
        this.cryptoCurrency = this.cryptoCurrency.filter((crypto) => {
            crypto.getId() !== id
        })
    }
    /**
    * Методы для работы с сущностью Role
     */
    addRole(nameRole: string) {
        this.role.push(new Role(this.generateId(this.role), nameRole))
    }
    getAllRole() {
        return this.role
    }
    getRoleById(id: number) {
        return this.role.filter(role => role.getId() === id)
    }
    removeRoleById(id: number) {
        this.role = this.role.filter((role) => {
            role.getId() !== id
        })
    }
    /**
     * Методы для работы с сущностью Order
     */
    getAllOrders(): Order[] {
        return this.orders
    }
    getOrderById(id: number) {
        return this.orders.filter(order => order.getId() === id)
    }
    addNewOrders(typeId: number, quantity: number, sellIdCurrency: number, buyIdCurrency: number) {
        this.orders.push(new Order(this.generateId(this.orders), typeId, quantity, sellIdCurrency, buyIdCurrency))
    }
    removeOrderById(id: number) {
        this.orders = this.orders.filter((order) => {
            order.getId() !== id
        })
    }
    /**
     * Методы для работы с сущностью OrderType
     */
    getAllTypesOrder(): OrderType[] {
        return this.orderTypes
    }
    getOrderTypesById(id: number) {
        return this.orderTypes.filter(orderType => orderType.getId() === id)
    }
    addNewOrderTypes(nameOperation: string) {
        this.orderTypes.push(new OrderType(this.generateId(this.orderTypes), nameOperation))
    }
    removeOrderTypeById(id: number) {
        this.orderTypes = this.orderTypes.filter((orderType) => {
            orderType.getId() !== id
        })
    }

}