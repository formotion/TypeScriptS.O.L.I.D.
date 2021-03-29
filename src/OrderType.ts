import { Common } from "./abstract/Common";

export class OrderType extends Common {
    protected id: number
    private nameOperation: string
    constructor(id: number, name: string) {
        super()
        this.id = id
        this.nameOperation = name

    }

    getNameOperation() {
        return this.nameOperation
    }
}