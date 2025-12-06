import React from "react"

const Card =  () => {

  const user = "Simu"
  const age = 12

  return (
    <>
      <div className="card">
        <h1>Simran Bhardwaj</h1>
        <p>My nickname is {user} </p> {/* use curly bracket to print var */}
        <p>I am {age} years old</p>
        <p>Hi there, I am Simran Bhardwaj</p>
      </div>
    </>
  )
}

export default Card