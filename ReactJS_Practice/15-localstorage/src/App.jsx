import React from "react";

const App = () => {

  // To clear data of localStorage
  localStorage.clear()  
  
  // Save data in key value pair
  localStorage.setItem('user', 'Simran')

  // Get data
  const user = localStorage.getItem('user')
  console.log(user);

  localStorage.setItem('age', '12')
  const age = localStorage.getItem('age')
  console.log(age, user)

  // To remove specific item
  localStorage.removeItem('age')


  const pfp = {
    username: 'Simu',
    age: 12,
    country: 'India'
  }

  console.log(pfp);  //obj form

  // localStorage.setItem('pfp', (pfp))  // val in obj form

  // Coz of key-val pair, must set val in str format (not in obj, like directly pfp). So use JSON.stringify
  localStorage.setItem('pfp', JSON.stringify(pfp))

  // localStorage.setItem('user', JSON.stringify(pfp))  //it will overwrite user key already existing

  const person = localStorage.getItem('pfp')
  console.log(person);

  // Back to obj form
  const person2 = JSON.parse(localStorage.getItem('pfp'))
  console.log(person2);
  

  return (
    <div>LocalStorage</div>
  )
}

export default App