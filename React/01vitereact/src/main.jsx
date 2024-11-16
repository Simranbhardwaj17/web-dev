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

const ReactElement = {
    type: 'a',
    props: {
        href: 'https://google.com',
        target: '_blank'
    },
    children: 'Click me to visit google'
}


const anotherElement = (
    <a href= "https://google.com" target = "_blank"></a>
)

//Its react render
createRoot(document.getElementById('root')).
render(
  
    // <App />
    //<MyApp />    //React use bundler which convert/parse these syntax into preferrable syntax(upgrade syn), work BTS 
    // MyApp
    // ReactElement()    not working
    anotherElement
  
)

//react create root & in that we pass a doc & render the app & app is a simple func which contain jsx


