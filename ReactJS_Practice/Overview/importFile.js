// import user from "./exportFile.js"   //name anything as it is default export
//  or 
import a from "./exportFile.js"
import { arr } from "./exportFile.js";  //Named Export   (so use var name same as in other ile)
import {age} from "./expFile2.js"
import position from "./expFile2.js";


// console.log(user);
console.log(a);  //Simu  (coz username is exported and here we named that as "a")

console.log(arr);  //[30, 45, 67]

console.log(age); //12

console.log(position); //Simran Bhardwaj, coz i have not used {} while importing. So it take as default one
