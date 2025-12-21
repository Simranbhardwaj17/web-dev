import { useEffect, useState } from "react";

const App = () => {
  // const [num, setNum] = useState(0)
  // const [num2, setNum2] = useState(100)

  const [a, setA] = useState(0)
  const [b, setB] = useState(0)

  // useEffect(function () {
  //   console.log('Use effect');
  // }, [num])

  function aChanging() {
    console.log("A is changing");
  }

  function bChanging() {
    console.log("B is changing");
  }

  // I want to run the fn in side stack, not in main stack so, use useEffect
  useEffect(function() {
    aChanging()
    // console.log('Use effect');
  }, [a])

  useEffect(function() {
    bChanging()
    // console.log('Use effect');
  }, [b])

  return (
    <div>
      {/* <h1>num {num}</h1>
      <h1>num2 {num2}</h1>

      <button
      onMouseEnter={() => {
        setNum(num+1)
      }}
      onMouseLeave={() => {
        setNum2(num2 + 10)
      }}
      >
        Hover
      </button> */}

      <h1>A {a}</h1>
      <h1>B {b}</h1>
      <button 
        onClick={() => {
          aChanging()
          setA(a+10)
        }}
      >Change A</button>
      <button 
        onClick={() => {
          setB(b-10)
        }}
      >Change B</button>
    </div>
  )
}

export default App