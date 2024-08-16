// l-15
const places = ["Haridwar", "Rishikesh", "Ladakh"]
const states = ["UK", "MP", "AP"]

// Push method-----------------
// places.push(states)              //not correct way to merge & create a new array coz push work at same array
// console.log(places);    
// console.log(places.length);


//Concat::---- Combines two or more arrays. This method returns a new array without modifying any existing arrays.
//Cons::----------only add two array ,so, not majorly use
const all = places.concat(states);
console.log(all);
console.log(all.length);
console.log(all.indexOf("MP"));
console.log(all.indexOf("AP" ));

//Spread method::---like glass fall & spread

const addAll = [places, states];                                       //Not good coz by this get array in array

const addAll1 = [...places, ...states];                 //spread      //MOST USED METHOD TO MERGE LOT OF ARRAY
console.log(addAll);                                  // O/P of addAll::----[ [ 'Haridwar', 'Rishikesh', 'Ladakh' ], [ 'UK', 'MP', 'AP' ] ]
console.log(addAll1);                                                // O/P::      [ 'Haridwar', 'Rishikesh', 'Ladakh', 'UK', 'MP', 'AP' ]

const newArray = [1, 2, 3,[6, 5, 7],8, [9, 4, [8, 3]]];
console.log(newArray);
const Array1 = newArray.flat(Infinity);
// const Array1 = newArray.flat(1);
console.log(Array1);

//At time of data scrapping,we get data in difer format(obj,string)but we need array
console.log(Array.isArray("Simu"));                              //T/F
console.log(Array.from("simu"));                                 //Convert into arr

console.log(Array.from({name:"Simran"}));       ////////important//////// get empty arr coz can't decide key,value

//convert multiple var into arr
let marks1 = 70
let marks2 = 70
let marks3 = 70
console.log(Array.of(marks1, marks2, marks3));


