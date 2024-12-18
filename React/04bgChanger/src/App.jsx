import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [color, setColor] = useState("olive")

  return (
    <div className="w-full h-screen duration-200"
    style = {{backgroundColor: color}}>
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
        <div className=" flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">
          <button 
          onClick={() => setColor("red")}
          className="outline-none px-4 py-1 rounded -full text-white shadow-lg" style={{backgroundColor:"red"}}>
            Red
          </button>
          <button 
          onClick={() => setColor("white")}
          className="outline-none px-4 py-1 rounded -full text-black bg-black shadow-lg" style={{backgroundColor:"White"}}>
            White
          </button>
          <button 
          onClick={() => setColor("black")}
          className="outline-none px-4 py-1 rounded -full text-white shadow-lg" style={{backgroundColor:"black"}}>
            Black
          </button>
          <button 
          onClick={() => setColor("orange")}
          className="outline-none px-4 py-1 rounded -full text-white shadow-lg" style={{backgroundColor:"orange"}}>
            Orange
          </button>
          <button 
          onClick={() => setColor("yellow")}
          className="outline-none px-4 py-1 rounded -full text-white shadow-lg" style={{backgroundColor:"yellow"}}>
            Yellow
          </button>
          <button 
          onClick={() => setColor("pink")}
          className="outline-none px-4 py-1 rounded -full text-white shadow-lg" style={{backgroundColor:"pink"}}>
            Pink
          </button>
          <button 
          onClick={() => setColor("blue")}
          className="outline-none px-4 py-1 rounded -full text-white shadow-lg" style={{backgroundColor:"blue"}}>
            Blue
          </button>
          <button 
          onClick={() => setColor("lavender")}
          className="outline-none px-4 py-1 rounded -full text-black shadow-lg" style={{backgroundColor:"lavender"}}>
            Lavender
          </button>
        </div>
      </div>
    </div>
  )
}

export default App

//by removing import display get stop so keep it

//color r changing so need to store that in a var & color is not just var but also reflect in ui so need state

//15:25
//onClick a unique method, it expects function to get parameter & u pass reference of func(by using setColor)
//it need fun not return value
// onclick={setColor()} it gives only ret val to onClick but here we need to pass val

//onC must need a func(callbk fun)

// func k andr func call