//l-40

//promise creation (hold in a variable, takes cb func) also reduce callback hell(cb inside cb)
const promiseOne = new Promise(function(resolve, reject) {      
    //do async task
    //DB calls, cryptography, network
    setTimeout(function() {
        console.log("Async completed"); 
        resolve()              //resolve connect .then()
    }, 1000)
})

//promise consumption( resolve connected to .then())
promiseOne.then(function () {                   //.then():- takes func(arrow, callback)
    console.log("Promise consumed");
    
})


//promise creation (No variable)
new Promise(function(resolve, reject) {
    setTimeout(function() {
        console.log("Async 2"); 
        resolve()              
    }, 1000)
}).then(function() {
    console.log("promise consumed 2");
})



const promiseThree = new Promise(function(resolve, reject) {
    setTimeout(function() {
              //resolve contain arrays, func, obj a/c to use
        resolve({name:"Simran", branch:"CSE"})              //To pass value              
    }, 1000)
})

promiseThree.then(function(user) {
    console.log(user);
})


const promiseFour = new Promise(function(resolve, reject) {
    setTimeout(function(){
    let error = true;           //Also use False or (T==1 & F==0 ), to trigger error use T
    if(!error) {
        resolve({name:"Simran", university:"ABC"})  
    }
    else {
        reject("ERROR: Something went wrong")
    }
    }, 1000)
})

//promise consume using arrow func (u can use as many .then & .catch)
//to get a single value from a obj (do chaining of .then():- mainly useful while DB connected)
promiseFour
.then((user) => {
    console.log(user);
    return user.name 
})
.then((name) => {                        //from above .then(), value return to this(.then)
    console.log(name);
})
.catch(function(error){                //to properly handle error
    console.log(error);
})
.finally(() => console.log("Problem is either resolved or rejected"))


// using async/await
const promiseFive = new Promise(function(resolve, reject) {
    setTimeout(function() {
        let error = true
        if(!true){
            resolve({author: "Simran Bhardwaj", year: "2009"});
        }
        else{
            reject("Error 404")
        }
    }, 1000)
})
//async- wait for the work to be exe, then process further else stop there(can't gracefully catch the handle)
//As DB coonection not occur, no further process

// // It don't resolve the error
// async function consumePromiseFive() {
//     const response =await promiseFive          //wait for whatever promise(resolve/ reject),    promise: a obj can't consume in this way using()
//     console.log(response);
// }
// consumePromiseFive()                //if error = false, everything work fine

async function consumePromiseFive() {
    try {
        const response = await promiseFive;
        console.log(response);        
    } catch (error) {
        console.log(error);
    }
}
consumePromiseFive()

//u can use both async/await(using try catch to handle error)   and   .then()  .catch()


async function getAllUsers() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users')    //hold in a var
        const data = await response.json()      //it takes time so use await
        console.log(data);
    } catch (error) {
        console.log("E:", error);  
    }
}
getAllUsers()


//Above(in try catch format) func in format of .then() & .catch()

fetch('https://jsonplaceholder.typicode.com/users')
.then((response) => {      //for response type ,  response:-name of var
    return response.json()
})  
//to handle above ret response.json(): send as data
.then((data) => {           //value received that is send by above then
    console.log(data);
})                      
.catch((error) => console.log(error))  //if fail

//here no need of try catch coz 1 .then() exe after other



// fetch('https://api.github.com/users/hiteshchaudhary')
// .then((response) => {      //for response type ,  response:-name of var
//     return response.json()
// })  
// //to handle above ret response.json(): send as data
// .then((data) => {           //value received that is send by above then
//     console.log(data);
// })                      
// .catch((error) => console.log(error))






//Why async code run at last?

// fetch syntax
//Fetch API takes a URL & produces a promise that resolves to the response
fetch("https://example.com/api/endpoint")
.then((response) => {
    //Do something with response
})
.catch(function (err) {
    console.log("Unable to fetch-" , err); 
});
