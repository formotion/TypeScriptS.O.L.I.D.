import {Common} from './abstract/Common'
export class User extends Common {
    protected id: number;
    private mail:string;
    private MD5Pass: string;
    private cryptoIds: number [];
    private roleIds: number [];
    private goalIds: number [];

    constructor(id:number, mail:string,pass:string, roleId:number){
        super()
        this.id= id;
        this.mail = mail;
        this.MD5Pass = pass;
        this.cryptoIds=[];
        this.roleIds = [roleId]
        this.goalIds=[]
    }

    /*getId(){
        return this.id;
    }*/

    getMail(){
       return this.mail;
    }
    setmail(mail:string){
        this.mail = mail;
    }

    getPass(){
        return this.MD5Pass;
    }
    setPass(pass:string){
        this.MD5Pass= pass;
    }

    getCryptoIds(){
        return this.cryptoIds;
    }
    addCryptoid(id:number){
        this.cryptoIds.push(id)
    }
    removeCryptoId(id:number){
        let newCryptoIds=[]
        this.cryptoIds.forEach((element, index, array)=>{
            element!==id&&newCryptoIds.push(element)
        })
        this.cryptoIds= newCryptoIds;
    }

    getRoles(){
        return this.roleIds.forEach((element)=>{
            console.log('У пользователя id роль: ' + element)
        })
    }
    addRole(id:number){
        this.roleIds.push();
    }
    removeRole(id:number){
        let newRoleIds=[]
        this.roleIds.forEach((element, index, array)=>{
            element!==id&&newRoleIds.push(element)
        })
        this.roleIds= newRoleIds;
    }

    getGoals(){
        return this.goalIds
    }
    removeGoalId(id: number){
        let newGoalIds=[]
        this.goalIds.forEach((element, index, array)=>{
            element!==id&&newGoalIds.push(element)
        })
        this.roleIds= newGoalIds;
    }
    addGoalId(id:number){
        this.goalIds.push(id)
    }

}