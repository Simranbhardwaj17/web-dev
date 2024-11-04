// L-48
// D-27/10/24

//class based get_set

//GETTER_SETTER: is to overwi8 the value in memory
//30:10 about proposal to use "#" for pvt class field as anyobj can access _variable/_prop, we overwi8 that by using get/set
 
class User {
    constructor(email, password) {
        this.email = email;
        this.password = password;
    }
    get password(){
        return this.password.toUpperCase()
    }
    // set password(value){
    //     this.password = value      //error: RangeError: Maximum call stack size exceeded (coz of setter call cons again & again { both setter & const set value})
    // }
    // //here, problem:- that const & setter both try to set values

    //alt approach to set value
    //Make new prop, no matter what user give & what call in const(name), value set in const from set.So, change name

    //NOTE:---> TO APPLY GET/SET:-->  METHOD NAME SHOULD BE SAME AS PROPERTY NAME

    //NOTE:---> Change name coz of race start b/w cons & GET/SET 

    //NOTE:---> Not to return set, only value set (must have exactly 1 para)
    get email(){
        return this._email.toUpperCase()        //must ret
        // _ show that u define in a pvt prop
    }
    set email(value){
        this._email = value        //not to ret, just set it
    }

    get password(){
        // return this._password.toUpperCase()  //value get/accessed as differ
        return `${this._password} simi`           //value get/accessed as differ
        //any 1 format a/c to u want
    }
    set password(value){
        this._password = value      //value stored as same 
    }
    //Now, cons set only email not passw, as u overwi8 password by get/set
}

const simran = new User("simi@b.com", "12ab")
console.log(simran.password);
console.log(simran.email);

//Abt getter & setter
//It is to get fine grained control(like not ret password/ no passw access then that help to give error)
//to not give access to everyone of prop of class/ customized code 
//By def present in class. So, if not wi8 show def behavior

//u can apply get/set on any prop/var of a class

//for getter(use get) & then name of prop/var of a class become method

//getter:-  is to get from outside
//setter:-  is to set value/prop



//U may get to learn abt stack overflow, race condition










