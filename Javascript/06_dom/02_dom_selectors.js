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
myH2
myH2[0].innerText    //'will get a value'

myH2.forEach(function(h){
    h.style.color = 'red'    //change color to red as myH2 is a nodelist .so, forEach will work
})
myH2.forEach(function(h){
    h.style.color = 'blue';  //u can also change the color  
    h.style.backgroundColor = 'purple';
    h.style.padding = '14px';
    // h.borderRadius           try
    h.innerText = "myH2"     //innerText changed to myH2
})

//to update value of list-items, use querySelectorAll to select and then apply function

// u can use forEach with NodeList


//This is the code on which below code works +++++++++++++++++++++++
// <!DOCTYPE html>
// <html lang="en">
// <head>
//     <meta charset="UTF-8">
//     <title>Learning DOM</title>
//     <style>
//         .bg-black{
//             background-color: #212121;
//             color: #fff
//         }
//     </style>
// </head>
// <body class="bg-black">
//     <div>
//         <h1 id="title" class="heading">WIKIPEDIA <span style="display: none;">testing</span></h1>
//         <h2>Lorem ipsum dolor.</h2>
//         <h2>Lorem ipsum dolor.</h2>
//         <h2>Lorem ipsum dolor.</h2>
//         <p>Wikipedia: The free encyclopedia</p>
//         <input type="password" name="" id="">

//         <ul>
//               <li class="list-item">One</li>
//               <li class="list-item">Ones</li>
//               <li class="list-item">Once</li>
//               <li class="list-item">Oncee</li>
//            </ul>
//     </div>
// </body>
// </html>

document.getElementById('title')
document.getElementById('title').id      //give id name
document.getElementById('title').class     //undef
document.getElementById('title').className  //give class of that id  (must use className instead of class )
document.getElementById('title').getAttribute    //its a func. So, need to pass value
document.getElementById('title').getAttribute('id')   
document.getElementById('title').getAttribute('class')
document.getElementById('title').setAttribute('class', 'text')    //it overwi8 the value
document.getElementById('title').setAttribute('class', 'text heading')  //it is best way to set (use both)

const title = document.getElementById('title') 

//Set CSS+++++++++++
title.style.backgroundColor = 'red'
title.style.padding = "20px"
title.style.borderRadius = "5px"
title.style.borderRadius = "15px"
title.innerText   //original text
title.textContent //original text + hidden
title.innerHTML // give whole ele (like tag,ele)


document.querySelector('h2')    //gives 
document.querySelector('#title')
document.querySelector('.heading')
document.querySelector('input[type="password"]')
document.querySelector('p:first-child')     //u can use css 


//to change color 
const myUl = document.querySelector('ul')
myUl.querySelector('li')        //select 1st li ele of ul
const turnGreen = myUl.querySelector('li')     
turnGreen.style.background = "red"      //change background color of li:1st ele
turnGreen.style.padding = "10px"
turnGreen.innerText         //give text inside li
turnGreen.innerText = "bee"    //change text to bee



//DIFFERENCE BETWEEN QUERYSELECTOR & QUERYSELECTORALL IS:
// the typeof data they return 
// QUERYSELECTOR :------
// return array type data on which all property can work

// QUERYSELECTORALL
// return Nodelist on which all array prop can't work



document.querySelectorAll('li')
const tempLiList = document.querySelectorAll('li')
tempLiList       //see its prototype, it tells that it is not a array(as u can't use map only forEach can be used)

tempLiList.style.color = 'red'         //NOT WORK COZ IT IS NOT  ARRAY

tempLiList[0].style.color = 'red'         //1st li ele get red
tempLiList.forEach(function(l) {             //every item came as li.So, l
    l.style.backgroundColor = 'red'       //in console use shift to enter in func body
})


const myH1 = document.querySelectorAll('h1')
myH1
myH1.style.color = 'red'            //NOT WORK COZ IT IS NOT ARRAY

myH1[0].style.color = 'red'         //h1 get red


//Mostly try to use forEach on Nodelist
//To use map, convert Nodelist into array

document.getElementsByClassName('list-item')          //HTMLCollection
const tempClassList = document.getElementsByClassName('list-item') 
tempClassList

//ERROR (forEach not a func)
// tempClassList.forEach(function(li) {                  
//     console.log(li);
//     li.style.backgroundColor = 'purple'
// })

//In HTMLCollection & arr
//Some property r differ like can't use loop in HTMLColl (u can use classic for loop as in 03_traversing.html)
//convert HTMLCollection to arr
Array.from(tempClassList)          //o/p will be arr(make sure by viewing prototype:- method)

const myConvertedArray = Array.from(tempClassList)
myConvertedArray

myConvertedArray.forEach(function(li) {                  
    li.style.color = 'blue'     //list-item get blue color
})





