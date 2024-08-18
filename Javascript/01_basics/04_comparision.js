// lec-08
console.log(2 > 1);
console.log(4 == 5);
console.log(6 >= 2);
console.log(6 != 2);


console.log("2" > 1);
console.log("05" < 4); 

// ---------Unique:-----------------
//Avoid these conversions 
console.log(null > 0);
console.log(null < 0);
console.log(null == 0);
// below 2 r "true" coz an equality check & comparison > < >= <= work differently
//comparison convert null to a no. , treating it as 0
// thats why 
console.log(null <= 0);
console.log(null >= 0);
 
//undefined same for all:- false
console.log(undefined == 0);
console.log(undefined > 0);

// === : Strict check -> checks value and also its datatypes
console.log("2" == 2);                            //It convert string 2 into num
console.log("2" === 2);                            //It don't convert coz of differ DT

