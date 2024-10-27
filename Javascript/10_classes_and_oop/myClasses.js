//L-45
//D-26/10/24


//U r using JS after "ES6"

//u can also add func & property in class
class User {
    constructor(username, email, password){             //const get call by new word
        this.username = username;
        this.email = email;
        this.password = password;
    }          
    //method
    encryptPassword(){
        return `${this.password}abd`
    }

    changeUsername(){
        return ` ${this.username.toUpperCase()}`
    }
}

//user
const simran = new User("Simran", "a@b.com", "44")

console.log(simran.encryptPassword());
console.log(simran.changeUsername());
console.log(simran);



//behind the scene(if there is no class, using func)

function User(username, email, password){             //const get call by new word
    this.username = username;
    this.email = email;
    this.password = password;
}

//for methods(inject it using prototype as func also act as obj)       
User.prototype.encryptPassword = function () {
    return `${this.password}abd`
}
User.prototype.changeUsername = function () {
    return ` ${this.username.toUpperCase()}`
}

const simranB = new User("SimranB", "abc@fb.com", "444")

console.log(simranB.encryptPassword());
console.log(simranB.changeUsername());
console.log(simranB);



//both will work 
