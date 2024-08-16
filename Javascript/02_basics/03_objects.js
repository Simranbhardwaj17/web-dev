// l-16
//This lec is all about object literal
// Object declare by  "key: value"
//Two ways to declare objects {difference is only singleton not performance or anything else}
// 1. Literals                               
// 2. Constructors

//Singleton::---when obj created by constructor  {Kind of single obj/instance}
// Object.create   ----------->>>     constructor method to create obj{Singleton form in it}

//When we create obj as literals, singleton not created cld as:-------

//Object literals

// Q::---> Take symbol as key of obj & print
const mySymbol = Symbol("key1")

const JsUser = {
    name: "Simran",
    "full name": "Simran Bhardwaj",
    age: 13,
    // mySymbol: "key2",
    [mySymbol]: "key11",
    technology: "MERN",
    "logged In": true
}

//To access object::-------------
console.log(JsUser.technology);               //In dot no need to use ""
console.log(JsUser["full name"]);               // this way(must use " ") is useful to access variable having gap
console.log(JsUser["logged In"]);
console.log(JsUser[mySymbol]);
console.log(typeof(JsUser[mySymbol]));                    //o/p::--string why not symbol search? Ans ::-->See o/p of line 42
// console.log(JsUser.mySymbol);
// console.log(typeof(JsUser.mySymbol));

JsUser.age = 15
// Object.freeze(JsUser)                  //It will stop changes in obj 
  // Must comment out freeze property(for working of function used) to access & make changes in JsUser
JsUser.age = 16
JsUser["logged In"] = false
console.log(JsUser);


//FUNCTION of object----------------------->>>>>>>>>
JsUser.greetings = function(){
    console.log("Hello JS User");
}

JsUser.greetings2 = function(){
    console.log(`Hello, ${this.name}`);
}
console.log(JsUser.greetings());
console.log(JsUser.greetings2());
