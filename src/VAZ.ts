import {Car} from './Interfaces/Car'
export class VAZ implements Car{
    private company: string;
    private userName: string;
    constructor(employeeCompany: string, userName: string) {

        this.company = employeeCompany;
        this.userName = userName;
    }
    run():void{
        console.log('runchik' + ' '+ this.userName)
    }
}