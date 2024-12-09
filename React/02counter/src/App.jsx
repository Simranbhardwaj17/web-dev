import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

//How changes propagate in react 
//hooks:- display on UI

// function App() {
  
//   let [counter, setCounter] = useState(15)          //how to use hooks(not use const)    {setCounter can be named as anything}
//   // let counter = 15

//   const addValue = () => {
//     // counter = counter + 1;
//     // setCounter(counter)       or
//     setCounter(counter + 1)             //help to sink state & UI
//     // console.log("Clicked", counter);
//   }

//   const removeValue = () => {
//     setCounter(counter - 1)
//   }

//   return (
//     <>
//       <h1>Counter Project</h1>
//       <h2>Counter Value: {counter}</h2>

//       <button 
//       onClick={addValue}>Add Value {counter}</button>  
//       <br></br>
//       <button
//       onClick={removeValue}
//       >Remove Value {counter}</button>
//       <p> Footer: {counter}</p>
//     </>
//   )
// }

// export default App


//Method passed not want to directly execute. so, remove " () " from addValue

//13:41  :- React hooks(doc)

// React hook is needed to update UI

//Every hook have special task assigned. For big library, need to make modular library only 1 task assigned to 1 function
// coz of updation & debug of code

//React control UI updation

//No need to import react still above method go & tree parsing is done coz of babel _jsx

//How to use hooks:-
//useState is used for change state(not just value change propagate it in UI/DOM) default value 
//to update var use method at 2nd place named as "setCounter" or "setIsLoggedin"
//no need to use-- 
// let counter = 14     to decl         &
//counter = counter + 1   ::to update

//State get updated everywhere no need to take references


//++++++++++++++++++++++++++++
//Assignment 
//Q:- Use condition for addValue(till 20) & removeValue(till 0(no -ve values))

function App() {
  
  let [counter, setCounter] = useState(15)          //how to use hooks(not use const)    {setCounter can be named as anything}
  // let counter = 15

  const addValue = () => {
    // counter = counter + 1;
    // setCounter(counter)       or
    // setCounter(counter + 1)             //help to sink state & UI
    // console.log("Clicked", counter);
    if(counter <= 19 ) {
      setCounter(counter + 1);
    }
  }

  const removeValue = () => {
    // setCounter(counter - 1)
    if(counter >= 1) {
      setCounter(counter - 1);
    }
  }

  return (
    <>
      <h1>Counter Project</h1>
      <h2>Counter Value: {counter}</h2>

      <button 
      onClick={addValue}>Add Value {counter}</button>  
      <br></br>
      <button
      onClick={removeValue}
      >Remove Value {counter}</button>
      <p> Footer: {counter}</p>
    </>
  )
}

export default App
