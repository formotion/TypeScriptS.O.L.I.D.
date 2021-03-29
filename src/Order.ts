import { Common } from "./abstract/Common"

export class Order extends Common {
    protected id: number
    private typeOrderId: number
    private quantity: number
    private sellCrypto: number
    private buyCrypto: number

    constructor(id: number, typeOrderId: number, quantity: number, sell: number, buy: number) {
        super()
        this.id = id
        this.typeOrderId = typeOrderId
        this.quantity = quantity
        this.sellCrypto = sell
        this.buyCrypto = buy
    }

    getType() {
        return this.getType
    }

    getQuantity() {
        return this.quantity
    }

    getGiveCrypto() {
        return this.sellCrypto
    }

    getSellCrtypto() {
        return this.sellCrypto
    }

    getBuyCrypto() {
        return this.buyCrypto
    }

}