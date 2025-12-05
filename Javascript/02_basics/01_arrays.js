//l-14
//Declare array

const declArr = [0, 1, 3, true, "Simu"]  //ele can be differ

//Arr - resizable, contain mix of differ DT
//Access using +ve integers
//VVI---------
//JS arr-copy operations create shallow copies (All std built-in copy operations 
// with any JS obj create shallow copies rather than deep copies)

//Shallow copy- A shallow copy of an object is a copy whose properties share the same references (point to the same underlying values) 
// as those of the source object from which the copy was made. As a result, when you change either the source or the copy, you may also 
// cause the other object to change too. That behavior contrasts with the behavior of a deep copy, in which the source and copy are completely independent.

// A deep copy of an object is a copy whose properties do not share the same references (point to the same underlying values) as those of the source object 
// from which the copy was made. As a result, when you change either the source or the copy, you can be assured you're not causing the other object to change too.

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

myArr2.shift();  //remove 0th idx[0] digit
myArr2.unshift(50); //add 50 at 0th idx [0]
console.log(myArr2.includes(44));                //o/p:-  false (boolean o/p)
console.log(myArr2.indexOf(4)); // o/p: 2
console.log(myArr2);

const arr3 = myArr.join();
console.log("myArray is " + myArr);
console.log(arr3);
console.log(typeof arr3);                        //coz of join become string
console.log(typeof myArr);

// const myArr3 = myArr2.join(names);
const myArr3 = myArr2.join();
console.log(myArr3); //50,6,4,8
console.log(myArr2);  //[ 50, 6, 4, 8 ]
console.log(typeof myArr3);  //string
console.log(typeof myArr2);  //object

//slice, splice
console.log("1st", myArr);  //1st [
                              // 0, 1,  2, 3,
                              // 4, 5, 99
                              // ]

const checkSlice = myArr.slice(2,4)  //include only 2 not 4
console.log(checkSlice);  //[ 2, 3 ]
console.log("2nd", myArr); // 2nd [0, 1,  2, 3, 4, 5, 99]

const checkSplice = myArr.splice(2,4)     //include both 2 & 4            
console.log("3rd", myArr);    // 3rd [ 0, 1, 99 ]                                        // 3 [ 0, 1, 99 ]
console.log(checkSplice);    // [ 2, 3, 4, 5 ]                                       //[ 2, 3, 4, 5 ]     how 5?? as index is from (2,4)

console.log(myArr2);     // [ 50, 6, 4, 8 ]                                          //   [ 50, 6, 4, 8 ]                              
const checkSplice1 = myArr2.splice(1,2)                 
console.log("4th", myArr2);      // 4th [ 50, 8 ]                                   //    4 [ 50, 8 ]
console.log(checkSplice1);    // [ 6, 4 ]                                    //   [ 6, 4 ]


//Splice - make change in original arr (only remaining ele, remains in arr)
//Slice- org arr remains same