import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  
  let counter= 14

  const addValue = () => {
    console.log("Clicked", Math.random());
  }

  return (
    <>
      <h1>Counter Project</h1>
      <h2>Counter Value: {counter}</h2>

      <button onClick={addValue}>Add Value</button>  
      <br></br>
      <button>Removed Value</button>
    </>
  )
}

export default App


//Method passed not want to directly execute. so, remove " () " from addValue