// l-17
// object singleton{obj as constructor}

// const tgUser = new Oject()                          //Singleton Object
const tgUser = {}                                      //Non-singleton Object
 
tgUser.id = "11abd"
tgUser.name = "Simran"
tgUser.loggedIn = true

console.log(tgUser);                                  //empty obj printed as empty
// O/P::-- {}(empty, if comment out line 7 to 9)
// O/P::-- { id: '11abd', name: 'Simran', loggedIn: true }             (if not comment out line 7 to 9)
console.log(typeof(tgUser));


const dcUser = {
    email: "abc@gmail.com",
    fullName: {
        userFullName: {
            firstName: "Simran",
            lastName: "Bhardwaj",
        }
    },
    address: {
        city: "Haridwar",
        state: "UK",
        pincode: 23456
    }
}
console.log(dcUser.address.pincode);
// 23456



// const obj1 = {"a", "b","c",}          //SyntaxError: Unexpected string
// const obj1 = {"a": "b","c"}
 
 //syntax to create obj :::-------->>> {_:_} or {_:_ , _:_}
const obj1 = {firstname: "Simran", lastname:"Bhardwaj"}              
const obj2 = {email: "abc@gmail.com"}
const obj3 = {class: 1}

// const obj = {obj1, obj2, obj3}
                    //using obj.assign()
// const obj = Object.assign({}, obj1, obj2, obj3)            //given empty braces to combine all object and get in 1 
                       // {}----->>target ,  obj1,obj2,.......----->>source
                       //coz of {}--->> new empty target created that contain all obj
                       // If {} not available then all source(object) go to obj1
// console.log(obj);
// console.log(obj === obj1);                             //true, if {} not given in line 40, coz (obj1 is the target)
                                                         //false, if {} given in line 40, coz ({}--> become the target and store all obj)

                                
          // using spread operator(Easy to use)------------->>>>>>>>>>>>>>>>>>>>
const obj = {...obj1, ...obj2, ...obj3,}                   //90% used spread all values & combine
console.log(obj);
// {
//     firstname: 'Simran',
//     lastname: 'Bhardwaj',
//     email: 'abc@gmail.com',
//     class: 1
//   }



// When we get values from database (in form of array of objects)
//(lots of obj separated by comma in a array)
const students = [
    {
        name: "S",
        class: 2,
        roll:3
    },
    {
        name: "R",
        class: 2,
        roll:5
    },
    {
        name: "S",
        class: 2,
        roll:3
    },
    {
        name: "A",
        class: 2,
        roll:1
    },
    {
        name: "N",
        class: 2,
        roll:2
    },
    {
        name: "P",
        class: 2,
        roll:4
    }
]
//To loop through or print a value
// students[1]
console.log(students[3]);
// { name: 'A', class: 2, roll: 1 }
console.log(students[3].roll);
// 1


console.log(tgUser);
// { id: '11abd', name: 'Simran', loggedIn: true }                                   
console.log(Object.keys(tgUser));                              //O/p converted into array(helpful to use any operation easily)
// [ 'id', 'name', 'loggedIn' ]
console.log(Object.values(tgUser));                     
// [ '11abd', 'Simran', true ]
console.log(Object.entries(tgUser));                            //O/p converted into array(arr in arr(1st value key,2nd value is value))
// [ [ 'id', '11abd' ], [ 'name', 'Simran' ], [ 'loggedIn', true ] ]

//To search/ask any property/value available or not
console.log(tgUser.hasOwnProperty('loggedIn'));
console.log(tgUser.hasOwnProperty('logged '));


//type const obj1 = {firstname: "Simran", lastname:"Bhardwaj"} then obj1 get lot of method 

//l-18
//Destructure done in both obj & array
//We need to destructure obj & take its values 

//obj create
const course = {
    coursename: "Chai & Js ",
    courseInstructor: "Hitesh",
    price: 0
}
//to print/access
// console.log(course.courseInstructor);                     okk to use but too much lines to access each values.so, destructure of obj done

//Destructure of obj---------------++++++++++

// const{courseInstructor} = course
// console.log(courseInstructor);
const{courseInstructor: instructor} = course                       //can destructure/change name of obj a/c to u
console.log(instructor);

//this concept is used in react method
//    const navbar = (props.companyname) => {                 //same as line 136
// const navbar = ({company}) => {                            //Best way::--destructure({--}use of curly braces means des) above object 

// }
// navbar(company = "Chai & code")


//API in form of obj:-------
// {                                              //obj without name|| key also in double quote except number & boolean(T/F) 
//     "name": "Simu",
//     "class": "pre-nursery",
// }
//In API/Js, by fetch method call url & get data, convert into obj & get value

// Sometime we get API in format of obj & also arr
// API in form of arr:--------
[
    {},
    {},
    {},
]

