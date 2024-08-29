// l-32
// Today learning to manipulate the page
// Learn to manipulate HTML collection & NodeList
// To choose h2/h1.... from a webpg

document.querySelectorAll(h2)     //error: h2 not defined
document.querySelectorAll('h2')

// put these in a var & then apply property to search 
// like
const allH2 = document.querySelectorAll('h2')

allH2[0].innerText
allH2[1].innerText

//to select class use dot (same as css)
const myH2 = document.querySelectorAll('.mw-headline')

myH2[0].innerText    //'will get a value'

myH2.forEach(function(h){
    h.style.color = 'red'    //change color to red
})
myH2.forEach(function(h){
    h.style.color = 'red';   
    h.style.backgroundColor = 'purple';
    h.style.padding = '14px';
    // h.borderRsdius           try
    h.innerText = "myH2"     //innerText converted to myH2
})



// u can use forEach with NodeList








