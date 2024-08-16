// l-17
// object singleton{obj as constructor}

// const tgUser = new Oject()                          //Singleton Object
const tgUser = {}                                      //Non-singleton Object

tgUser.id = "11abd"
tgUser.name = "Simran"
tgUser.loggedIn = true

console.log(tgUser);                                  //empty obj printed as empty


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
const obj = {...obj1, ...obj2, ...obj3,}
console.log(obj);



