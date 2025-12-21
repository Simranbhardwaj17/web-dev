import { useState } from 'react'
import axios from 'axios'

const App = () => {

  const [data, setData] = useState([])

  // async function getData() {
  //   const response = await fetch('https://jsonplaceholder.typicode.com/todos/1')
  //   console.log(response);
  // }

  // const getData = async () => {
  //   const response = await fetch('https://jsonplaceholder.typicode.com/todos/1')
  //   // console.log(response); 

  //   const data = await response.json()
  //   console.log(data);
  // }

  // const getData = async () => {
  //   // const response = await axios.get('https://jsonplaceholder.typicode.com/users')
  //   // console.log(response.data);

  //   // Destructure
  //   const {data} = await axios.get('https://jsonplaceholder.typicode.com/users')
  //   console.log(data);  
  // }

  const getData = async () => {
    const response = await axios.get('https://picsum.photos/v2/list')
    // console.log(response.data); //data in form of arr
    setData(response.data)
  }

  return (
    <div>
      <button onClick={getData}>Get Data</button>
      <div>
        {data.map(function(elem,idx) {
          return <h3>Hello, {elem.author} {idx}</h3> //call data through api
        })}
      </div>
    </div>
  )
}

export default App