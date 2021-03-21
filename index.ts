import { DB } from "./src/DB";

let db = new DB
db.addUser('wag@mail.ru', '4564sdsd', 1)
console.log(db.getAllUser(), 'Все юзеры')