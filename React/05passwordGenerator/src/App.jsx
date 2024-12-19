import { useState, useCallback, useEffect, useRef} from 'react'


function App() {               //here 1st we r collecting the var which state need to be changed
  const [length, setLength] = useState(8)        //def value/length is 8
  const [numberAllowed, setNumberAllowed] = useState(false)     //def value is false as checkbox is not allowed
  const [charAllowed, setCharAllowed] = useState(false)        
  const [password, setPassword] = useState("")       //we generate password(using functionality) as pg load

  //useRef hook(here help to copy text from i/p,    help in better UI, help to take ref & do manipulation)
  const passwordRef = useRef(null)          //no def value as no ref in password
              //to take ref, pass ref in i/p(help to connect)

  //useCallback hook(read doc) :- use for passwordGenerator
  const passwordGenerator = useCallback(() => {
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"      //str taken then condition apply
    if (numberAllowed) str += "0123456789"         //if no allowed add no
    if (charAllowed) str += "!@#$%^&*-_+=[]{}~`"

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1)     //to get natural no(not decimal)     //char take index
      pass += str.charAt(char)             //+= concatenate all char,   charAt:- mthd to find ele at that index 
      
    }

    setPassword(pass)       //update state


  }, [length, numberAllowed, charAllowed, setPassword])  //pass fn & dependencies,  not give password coz it will cont.. run as password change regularly
          //u can also use above without useCallbk, then don't use these arr

  const copyPasswordToClipboard = useCallback(() => {
    passwordRef.current?.select();   //help for optimization, help in effects that help to know any functionality is working(like button color change,color the selected(help to know selected value) value)
    passwordRef.current?.setSelectionRange(0, 102);           //range maybe useful to copy fix value range
    window.navigator.clipboard.writeText(password)            //window, only use in react(coz of window obj) not in nextjs coz of server side rendering
  }, [password])   //only password, coz button is dependent only on password(only it is interdependent)

  useEffect(() => {
    passwordGenerator()
  }, [length, numberAllowed, charAllowed, passwordGenerator])    // if any change made in these it will re-run     //useEffect affected by these if these r changed it will run again
  return (
    
    <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 bg-gray-800 text-orange-500">
      <h1 className='text-white text-center my-3'>Password generator</h1>
    <div className="flex shadow rounded-lg overflow-hidden mb-4">
        <input
            type="text"
            value={password}
            className="outline-none w-full py-1 px-3"
            placeholder="Password"
            readOnly
            ref={passwordRef}           //to take ref pass ref in i/p
        />
        <button
        onClick={copyPasswordToClipboard}    //onClick mthd
        className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0'
        >copy</button>
        
    </div>
    <div className='flex text-sm gap-x-2'>
      <div className='flex items-center gap-x-1'>
        <input 
        type="range"
        min={6}
        max={100}
        value={length}
         className='cursor-pointer'
         onChange={(e) => {setLength(e.target.value)}}
          />
          <label>Length: {length}</label>
      </div>
      <div className="flex items-center gap-x-1">
      <input
          type="checkbox"
          defaultChecked={numberAllowed}
          id="numberInput"
          onChange={() => {
              setNumberAllowed((prev) => !prev);
          }}
      />
      <label htmlFor="numberInput">Numbers</label>
      </div>
      <div className="flex items-center gap-x-1">
          <input
              type="checkbox"
              defaultChecked={charAllowed}
              id="characterInput"
              onChange={() => {
                  setCharAllowed((prev) => !prev )
              }}
          />
          <label htmlFor="characterInput">Characters</label>
      </div>
    </div>
</div>
    
  )
}

export default App

//to track length use useState+++++++++++
//setPassword(pass)     to read pass

//useCallback concept++++++++++
//it takes the dependency like that can possibly run to optimize method
//help to memoize/optimize function(put in cache) not run the func
//useCallback hook help to optimize the method

//so take setPassword too in cache & optimize it
//using useCallback concept of memoization done like keep value in cache

//A/c to dependency u can use it

//can't use onChange directly as need to event to call setLength prop

//32:50
//for checkmark,to propagate event u can fire callbk using != make t to f, F to T

//we can't control what to render that is done by setValue, setState
//in react too many render,then react limits the no of renders to prevent an infinite loop

//to call password u can use button, onClick & call


//useEffect hook++++++++++++++++++++
//in it we talk about if any problem
//no need to store in var
//takes callbk, dependency arr(depend on ?)

//41:16
//useCallback work on optimization of method if any change in dependency occur , useEffect hook: in it if any problem occur in dependency, run again 




//useRef hook++++
//help to take reference , Enhance UI & for that need to pass ref to selected i/p

