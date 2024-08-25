// l-30

const clothBrand = ["Levi's", "Puma", "Zara", "Adidas"]
clothBrand.forEach( (brand) => {
    // console.log(brand);
    // console.log(brand.split(2));
    console.log(brand.replace("Puma","Sharang"));
})

//forEach not ret value -------------- (true)
// const values = clothBrand.forEach( (brand) => {
//     console.log(brand);
//     return brand
// } )
// console.log(values);          //undef


//++++++++++++    filter   ++++++++++++++

//Inside filter -->callbackfn that access each value then wi8 condition, if true then printed 
// filter retun value
// Returns the elements of an array that meet the condition specified in a callback function.

const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9]
            //In filter, arrow fn using ()
// const newNums = myNums.filter( (num) => num > 5)             //Inside filter callbackfn 
// console.log(newNums);
       
           //In filter, arrow fn using {}  "scope"
const newNums = myNums.filter( (num) => {
    return num > 5                //when use curly braces must wi8 return coz of scope, else []will be o/p 
})              
console.log(newNums);

//same using forEach
const newNum = []                   //1st make arr (i.e empty)
myNums.forEach( (num) => {          //use arrow fn callback ( () => )     then name each as num
    if (num > 5) {                  //condition
        newNum.push(num)            //Basic arr method to add value
    }
})
console.log(newNum);














