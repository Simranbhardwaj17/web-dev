//l-14
//Declare array
const myArr = [0, 1, 2, 3, 4, 5]
const names = ["simu" , "chiragi"]

//by creating obj
const myArr2 = new Array(2, 6, 4, 8)                // Here no need to add sq brackets

//Access
console.log(names[0]);
console.log(names.length);
console.log(names[1].length);
console.log(names.slice());
console.log(names[1].slice(1,3));
console.log(names.pop());

//In console write " const numbers = [1, 2, 3, 4]"
//then wi8 numbers get protoype & learn functions from it


//No parameter in shift & pop
console.log(myArr.push(99, 8));
console.log(myArr);
console.log(myArr.length);
myArr.pop();
console.log(myArr);
console.log(myArr.length);

myArr2.shift();
myArr2.unshift(50);
console.log(myArr2.includes(44));                //o/p:-  44 not present in myArr2
console.log(myArr2);

const arr3 = myArr.join();
console.log("myArray is " + myArr);
console.log(arr3);
console.log(typeof arr3);                        //coz of join become string
console.log(typeof myArr);

//slice, splice
console.log("1", myArr);

const checkSlice = myArr.slice(2,4)
console.log(checkSlice);
console.log("2", myArr);

const checkSplice = myArr.splice(2,4)                 
console.log("3", myArr);                                            // 3 [ 0, 1, 99 ]
console.log(checkSplice);                                           //[ 2, 3, 4, 5 ]     how 5?? as index is from (2,4)

console.log(myArr2);                                               //   [ 50, 6, 4, 8 ]                              
const checkSplice1 = myArr2.splice(1,2)                 
console.log("4", myArr2);                                         //    4 [ 50, 8 ]
console.log(checkSplice1);                                        //   [ 6, 4 ]

