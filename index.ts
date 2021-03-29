import { DB } from "./src/DB";
import { Profile } from "./src/Profile";

let db = new DB
//db.addUser('wag@mail.ru', '4564sdsd', 1)
//console.log(db.getAllUser(), 'Все юзеры')
let client = new Profile(db)
client.login('vvl@tpu.ru', 'ghbdtn')

