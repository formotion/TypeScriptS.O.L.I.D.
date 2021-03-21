import {Car} from './Interfaces/Car';
 import {VAZ} from './VAZ';
 export class Pep {
   alice: Car = new VAZ("Microsoft", "Alice");

   writeln():void{
       console.log(this.alice, 'ALICE')
       console.log(this.alice.run() , 'ALICE RUN')
   }

}