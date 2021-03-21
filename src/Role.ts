import { Common } from "./abstract/Common"

export class Role extends Common{
    protected id: number
    private nameRole: string

    constructor(id:number, nameRole: string) {
        super()
        this.id = id
        this.nameRole = nameRole
    }

    getNameRole(){
        return this.nameRole
    }
}