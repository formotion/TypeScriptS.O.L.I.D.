import { Common } from "./abstract/Common"

export class CryptoCurrency extends Common {
   protected id: number
   private ccyId: number
   private balance: number 

constructor(id:number, ccyId:number, balance:number){
    super()
    this.id= id
    this.ccyId= ccyId
    this.balance= balance
}

   getCCYId(){
       return this.ccyId
   }
   getBalance(){
       return this.balance.toFixed(5)
   }

}