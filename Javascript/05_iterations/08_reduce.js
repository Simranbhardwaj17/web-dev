// l-30
// +++++++++++     reduce     ------------
// Calls the specified callback function for all the elements in an array. 
// The return value of the callback function is the accumulated result, and is 
// provided as an argument in the next call to the callback function.


const price = [599, 699, 200]
const totalCost = price.reduce(function (accumulate, currentvalue) {        //callbackfn:: (function () {})
    console.log(`accumulate: ${accumulate} and currentvalue: ${currentvalue}`);
    return accumulate + currentvalue
}, 0)
console.log(totalCost);

//It is mainly use to calculate price (like in ecommerce website or somewhere ese)

