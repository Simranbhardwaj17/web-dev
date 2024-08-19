// l-26
//switch syntax:
// switch (key) {           //key- value to check(key-only 1)
//     case value:          //value- like a lock(many)
        
//         break;

//     default:
//         break;
// }


birthDate = 17            //can be string also "---" then case will be same in "---"
switch (birthDate) {
    case 8:
        console.log("Happy birthday Bhaiji");
        break;                                            //use break to stop printing next lines
    case 15:
        console.log("Happy birthday M");
        break;
    case 17:
        console.log("Happy birthday S");
        break;
    case 30:
        console.log("Happy birthday C");
        break;

    default:                                              //default: use when no case match
        console.log("Let me know your birthdate");
        break;
}


















