
import Chai from "./chai"

function App() {
  

  // return (
  //   <Chai/>
  // )

  return (
    <>
      <Chai/>
      <h1>React</h1>
      <p>Para</p>
    </>
    
  )
}

export default App

//can return only 1 ele in app.jsx

//Why delete html code, coz of jsx as jsx is wrapped in closing tag(jsx expressions must have one parent ele)
// So, u can return fragment(empty tag)
/* <> 
  <h1></h1>
  <p></p>
</> */

//BrowserError:-  <chai> is unrecog in this browserto render a React component start its name with an uppercase letter