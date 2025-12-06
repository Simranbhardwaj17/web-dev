import React from "react";

const Card = (props) => {  //u can write anything in place of props

  // console.log(props);  object
  
  return (
    <div className="card">
      {/* <img src="https://expertifie.com/wp-content/uploads/2022/07/System-designhld-lld.jpg" /> */}
      <img src={props.img} alt=''/>
      <h2>Blog on {props.content} </h2>
      <p>Written by {props.user} Bhardwaj, {props.age}</p>
      <button>Post</button>
    </div>
  )
}

export default Card