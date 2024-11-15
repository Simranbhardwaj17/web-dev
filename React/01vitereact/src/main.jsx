import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import App from './App.jsx'

createRoot(document.getElementById('root')).
render(
  
    <App />
  
)

//react create root & in that we pass a doc & render the app & app is a simple func which contain jsx