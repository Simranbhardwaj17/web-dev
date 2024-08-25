//l-29

//  ++++++++++++++++ for_each_loop ++++++++++++++++
//higher order fn

//for loops on object -->  forin
//for loops on array -->  forof or many.....
                        // like for_each, map

// forEach(callbackfn: (value: string, index: number, array: string[]) => void, thisArg?: any): void
// A function that accepts up to three arguments. forEach calls the callbackfn function one time for each element in the array.
// Performs the specified action for each element in an array.

    //  callbackfn:: fn that have no name(no need to store)            callback can be in form of fn & arrow fn   
    // callbackfn:: in arrow fn :-    ( () => )  ---->without using return

                                    //   ( (s) => {return s.book === 'phy'}) 
                                                // using ret coz of scope
                                    

const progLang = ["js", "cpp", "java", "python"]
progLang.forEach(function (val){           //this fn is inside a array so it take value as arg & can be call as val/i/item
    console.log(val);
})

progLang.forEach( (lang) => {           //arrow fn
    console.log(lang);
})

//u can also pass a fn
function printArg(words) {
    console.log(words);  
}
progLang.forEach(printArg)
// progLang.forEach(printArg()) --->   TypeError: undefined is not a function
//If wi8 fn at same place then remove name coz of  callbackfn
// else to pass a fn use reference( printArg ) 
// not ( printArg())coz it execute at same time

//for_each access:-
progLang.forEach( (item, index, arr) => {
    console.log(item, index, arr);
})

//learn iteration on arr that have obj as value(useful for database coz we get data in same way)
const myBooks = [
    {
        book1: "Mechanics 1",
        author: "DC Pandey"
    },
    {
        book2: "Physics",
        author: "HC Verma"
    },
    {
        book3: "Cengage Math",
        author: "N/A"
    }
]
//to access obj inside a arr
myBooks.forEach( (item) => {
    console.log(item);    //by item,u have access of object(it means u call obj as item)
})

myBooks.forEach( (item) => {
    console.log(item.book3);  //access property inside obj
})

