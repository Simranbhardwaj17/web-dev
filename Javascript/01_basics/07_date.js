//l-13
//long digits r time in millisec from 1jan1970 till now
//Don't get confuse by month & day o/p 
// coz  month & day start from 0
// if u want u can add 1 "+1" for ur convenient
let date = new Date();                                            //Instance/object of date
console.log(Date);                                                //[Function: Date] ::Tells that Date used is a function
console.log(date);   
console.log("toString:-  " + date.toString());                    //2024-08-15T16:21:07.240Z :: Not easy to understand, convert to string
console.log("getTime():- " + date.getTime ());
console.log("toISOString():-  " + date.toISOString());
console.log("toLocaleDateString():-  " + date.toLocaleDateString());
console.log("toJSON():-  " + date.toJSON());
console.log("toDateString():-  " + date.toDateString());
console.log("toLocaleString():-  " + date.toLocaleString());               //toLocaleString():-  16/8/2024, 8:39:14 am
console.log(typeof date);

//getDate(): number
// Gets the day-of-the-month, using local time.
console.log(date.getDate());  
console.log(date.getDay());                          //O/P:- 5 == Friday
console.log(date.getFullYear());  
// console.log(date.toString(getDay()));  
console.log(date.getMonth());                


//-----------------Create date on your own-----------------------------
// Date(year: number, monthIndex: number, date?: number, hours?: number, minutes?: number, seconds?: number, ms?: number): Date
// The month as a number between 0 and 11 (January to December).
// Creates a new Date.----------------------
// --------------/////////////////

// let myDate = new Date("6-7-2077");
// let myDate = new Date(8/9/2034);
// let myDate = new Date(2024,3, 23);
// let myDate = new Date(2024,3, 23, 38, 34,2);                     //Here, hour is 38>24.so,date increases by 1
let myDate = new Date(2024,3, 23, 3, 34,2);
// let myDate = new Date("06-30-2005");           //MM-DD-YYYY
// let myDate = new Date("2024-02-02");           //YYYY-MM-DD
console.log("toLocaleString():-  " + myDate.toLocaleString());
console.log("toDateString():-  " + myDate.toDateString());

// For exact time in quizes & polls
let timeStamp = Date.now();
console.log(timeStamp);
console.log(myDate.getTime());                                      //To compare date from 1jan1970 for booking hotels,flight

// to get time in sec(in general, we get in ms),easy to compare
console.log(Math.floor(Date.now()/1000));                           //Use math.round/floor not ceil

console.log(`The date and time is ${date.toLocaleString()}`);

//customize LocaleString
myDate.toLocaleString('default', {
    weekday: "short",
    month: "long"
})
console.log(myDate.toLocaleString());
console.log(myDate);
