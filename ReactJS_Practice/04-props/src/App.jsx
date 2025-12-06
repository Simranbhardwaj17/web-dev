import React from "react";
import Card from "./components/Card";

const App = () => {
  return (
    <div className="parent">
      <Card user='Simu' age={19} img='https://expertifie.com/wp-content/uploads/2022/07/System-designhld-lld.jpg' content='System Design' />  {/* (pass value) , pass num/arr/var in curly braces */}
      <Card user='Simran' age={23} img='https://assets.ganeshaspeaks.com/wp-content/uploads/2025/10/chhath-puja-date-1.webp' content='Chhath Puja' />
      <Card user='Simran' age={22} img='https://i0.wp.com/neopolitico.com/wp-content/uploads/2024/08/Nalanda-Uni.jpg?fit=1200%2C800&ssl=1' content='Nalanda University' />
    </div>
  )
}

export default App