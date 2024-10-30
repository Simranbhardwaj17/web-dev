//L-43
//D- 26/10/24

// let myName = "Simran       "
// let surname = "Bhardwaj    "
// console.log(myName.length);      //Get prop coz of string   it not work if var have extra spaces
// console.log(myName[3]);

// //this will work for every str
// //we need it as method (not property)      differentiate both by using ()     
// console.log(myName.truelength);     //It remove extra sp   

// console.log(myName.trim().length);  //can also use trim but here try to learn how to baigin that prop with every string


//Now start

let heros = ["thor", "spiderman"]

let power = {
    thor: "hammer",
    spiderman: "sling",

    //to define mthd use func as value (in place of str, num)
    getSpiderPower: function () {
        console.log(`Spidy power is ${this.spiderman}`);
    }
}

// ADD A PROPERTY IN OBJECT & THAT IS ACCESSIBLE BY ALL function, Array, str (as in fig)
Object.prototype.simran = function() {                 //Object:- datatype
    console.log(`Simran is present in all objects`);
}

// If power is injected in arr ten is it also avail to obj (as 1st check in arr/fun/str then in obj then high)
//to inject in arr
Array.prototype.heySimran = function() {
    console.log(`Hi Simran`); 
}

heros.simran()
heros.heySimran()           //here only arr have given that power to acess it but if give that power to path(obj) then 45 46 line occur
// power.heySimran()      o/p:-TypeError: power.heySimran is not a function     WHY IT HAVE NO ACCESS TO heySim?

power.simran()          //for func       Is there any mthd avail to do .simran()
heros.simran()           //for array (directly access top level hierarchy)
// ADD A PROPERTY IN OBJECT & THAT IS ACCESSIBLE BY ALL function, Array, str (as in fig)



//see in console when decl obj
// const testObj = {username: "Simran"}
// testObj   //in result u will not get any func name as simran. So, u can inject
// power.getSpiderPower()




//INHERITANCE

const user = {
    name: "SB",
    class: 1
}

const teacher = {
    makeVideo: false
}

const teachingSupport = {
    isAvailable: false
}

const TASupport = {
    makeAssignment: 'JS assignment',
    fullTime: true,
    __proto__ : teachingSupport   //now u can also access "TeachingSupport" obj by creating obj of TASupport by "new" (both get lined)
} 

//u can also access it(prototype) outside
teacher.__proto__ = user     //teacher can access all prop of user 
// IT IS CALLED AS PROTOTYPAL INHERITANCE(can access other prop)
//ITS MODERN SYNTAX IS:---------
//directly access obj

Object.setPrototypeOf(teachingSupport, teacher)         //teachingSupport access all prop of teacher

//For classes use extend(inheritance)

// Every obj is a instance, it dont mean they share b/w them (aapas me) every obj have some prop(like default prop .len(), proto) 
// but all not get same value as 1 obj like username: "Simran" is only for testObj(in line:52) not for all

// BUT IN A SITUATION, if u want to exchange info or link obj(use prototype) 
//prototype is a property (syntax:-  __proto__)



//WE WANT TO SOLVE A PROBLEM:---- (using INHERITANCE)
// Get a mthd in string for all str(mthd will update prop if create a prop & mthd)

let anotherusername = "SimranBhardwaj    "       //how to count gap
//inject trueL
String.prototype.trueLength = function(){
    console.log(`${this}`);           //current context (jisne call kra)
    console.log(`True Length is: ${this.trim().length}`);        
}

anotherusername.trueLength()
"simran".trueLength()
"Gudiya".trueLength()




//Today end of Behind The Scene of JS(oop)
//Now syntax start from next