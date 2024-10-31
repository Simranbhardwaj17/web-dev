//L-45
//D-26/10/24

//this concept is helpful when create user & at same time get uniqueid (that functionality to use)

class User {
    constructor(username) {
        this.username = username;
    }

    logMe() {
        console.log(`USERNAME: ${this.username}`);           //curr context in class 
    }

    // createID() {
    //     return `122`
    // }

    //most of time, u don't want to give access of this method to each & every obj that r initiated by that class. so, use static
    static createID() {       //static stop that mthd/prop to being accessed
        return `122`
    }
}

//user
const simu = new User("SB")
// console.log(simu.createID());      //o/p:- TypeError: simu.createID is not a function  (error coz of static keyword)

class Teacher extends User {
    constructor(username, email) {      //order not matter
        super(username)
        this.email = email
    }
}

const cn = new Teacher("cn", "cn@b.com")   //user
cn.logMe()
console.log(cn.createID());      //error ( after static:- child ,class no one can inherit)


//last line imp
