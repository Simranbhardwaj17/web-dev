//L-45
//D-26/10/24

class User {
    constructor(username) {
        this.username = username;
    }

    logMe() {
        console.log(`USERNAME is ${this.username}`);           //curr context in class 
    }
}

//to make e-commerce / school website, convert user to teacher,admin,...
class Teacher extends User {
    constructor(username, email, password){             
        super(username)     //super is helpful in class(super keyword refer to class to be extend , go to class, set this automatically BTS & can be accessed)
        this.email = email;
        this.password = password;
    } 

    addCourse(){
        console.log(`A new course was added by ${this.username}`);
    }
}

const simu = new Teacher("Simran", "a@b.com", "44") //user

simu.addCourse()     //here username is passed but no use of call
simu.logMe()      //coz it inherit

const simu1 = new User("simu1")
// simu1.addCourse()      TypeError: simu1.addCourse is not a function
simu1.logMe()


console.log(simu === simu1);
console.log(simu === Teacher);      // o/p:- false , coz it is instance(not exact)
console.log(simu instanceof Teacher);
console.log(Teacher instanceof User );
console.log(simu1 instanceof User );





