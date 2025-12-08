import React from "react";

const App = () => {

  function btnCLicked() {
    console.log('Button clicked');
  }

  function mouseEnter() {
    console.log('Mouse Entered');
  }

  function inputChanging(val) {
    console.log(val);
  }

  const pageScrolling = (elem) => {
    // console.log("page scrolling at speed of", elem);
    if(elem>0) {
      console.log('Downward scrolling');
    } else {
      console.log('Upward scrolling');
    }
  }

  return (
    <div>
      <button onMouseEnter={mouseEnter} onClick={btnCLicked}>Click</button>
      <button onClick={btnCLicked}>Explore</button>

      <button onClick={() => {
        console.log('Button clicked2');
      }}>clicked2</button>

      <input 
      onChange={function(elem) {
        inputChanging(elem.target.value)  //in this way using fn we can call and pass/send data too (don't do inputChanging())
      }} 
      type="text" 
      placeholder="Enter name" />

      <div className="box" onMouseMove={(elem)=> {
        console.log(elem.clientX);
      }}></div>

      <div onWheel={(elem)=>{
        pageScrolling(elem.deltaY)
      }}>
        <div className="page1"></div>
        <div className="page2"></div>
        <div className="page3"></div>
      </div>
    </div>
  )
}

export default App