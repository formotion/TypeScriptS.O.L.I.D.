import { Common } from "./abstract/Common"

export class CCY extends Common {
   protected id:number
   private name: string
   private shortName: string
   private numberSign: number
   
   constructor(id:number,  name: string, shortName: string, numberSign: number){
       super()
       this.id = id
       this.name = name
       this.shortName = shortName
       this.numberSign = numberSign
   }

    getName(){
        return this.name
    }

    getShortName(){
       return this.shortName
    }

    getNumberSight (){
        return this.numberSign
    }

}