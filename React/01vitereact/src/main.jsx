import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import App from './App.jsx'

function MyApp() {
    return(
        <div>
            <h1>Custom App | Simran </h1>
        </div>
    )
}

//React convert this above HTML syntax into below obj syn(to form tree)

//Not working coz of syntax defined by us (not a/c to react)
// const ReactElement = {
//     type: 'a',
//     props: {
//         href: 'https://google.com',
//         target: '_blank'
//     },
//     children: 'Click me to visit google'
// }

const anotherUser = "Coder S"

// This time create a/c to react(not us)  use React createElement() format. So, its working
const reactElement = React.createElement(
    'a',      //type
    {href: 'https;//google.com', target: '_blank'},
    'Click me to visit google',
    //to inject anotherUser, after tree creation var injection occur
    anotherUser      //final exp is the evluated expression that is injected at last
)
//u can't use here(inside reactElement) if else coz of js syntax(in obj it is not allowed) & it is evluated expression


//It is  working coz of only HTML present
const anotherElement = (
    <a href= "https://google.com" target = "_blank">Visit google</a>
)

//Its react render
createRoot(document.getElementById('root')).
render(
  
    // <App />
    //<MyApp />    //React use bundler which convert/parse these syntax into preferrable syntax(upgrade syn), work BTS 
    // MyApp
    // ReactElement()    not working
    // anotherElement
    reactElement
)

//react create root & in that we pass a doc & render the app & app is a simple func which contain jsx


