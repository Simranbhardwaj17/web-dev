## 📘 Calling Functions in React — Explained with Examples

This document explains the different ways functions are called inside React applications.
React functions can be triggered by events, called directly, passed as props, and even invoked through lifecycle hooks like useEffect.

## 📚 Table of Contents

Event Handlers

Direct Function Calls

Calling Functions Passed as Props

Child-to-Parent Function Calls

Calling Functions in useEffect

# 1️⃣ Event Handlers

Functions are often called in response to user interactions such as clicks, form submissions, or input changes.

function MyComponent() {
  const handleClick = () => {
    console.log('Button clicked!');
  };

  return (
    <button onClick={handleClick}>Click Me</button>
  );
}



✔ Used for: clicks, inputs, forms, keypress events, etc.

# 2️⃣ Direct Function Calls (Inside the Same Component)

You can call functions directly inside the component or within other functions.

function MyComponent() {
  const calculateSum = (a, b) => a + b;

  const result = calculateSum(5, 10); // Direct call

  return (
    <div>
      <p>Sum: {result}</p>
    </div>
  );
}



✔ Used for: calculations, transformations, reusable logic.

# 3️⃣ Calling Functions Passed as Props (Parent → Child)

A parent can pass a function as a prop to a child component.
The child can call it when needed.

Parent Component

function ParentComponent() {
  const greet = (name) => {
    console.log(`Hello, ${name}!`);
  };

  return (
    <ChildComponent onGreet={greet} />
  );
}


Child Component

function ChildComponent({ onGreet }) {
  return (
    <button onClick={() => onGreet('Alice')}>Greet</button>
  );
}



✔ Used for: communication from child → triggering parent logic.

# 4️⃣ Calling Functions from Child to Parent (Using Callback Props)

This pattern is used when the child needs to send data or an event back to the parent.

Parent Component

function ParentComponent() {
  const handleChildAction = (message) => {
    console.log(`Action from child: ${message}`);
  };

  return (
    <ChildComponent onAction={handleChildAction} />
  );
}


Child Component

function ChildComponent({ onAction }) {
  return (
    <button onClick={() => onAction('Data from child')}>
      Perform Action
    </button>
  );
}



✔ Used for: forms, modals, inputs, data submission from child → parent.

# 5️⃣ Using useEffect Hook (For Side Effects)

Functions that perform side effects—like data fetching, subscriptions, timers—are usually called inside useEffect.

import React, { useEffect, useState } from 'react';

function DataFetcher() {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('https://api.example.com/data');
      const json = await response.json();
      setData(json);
    };

    fetchData();
  }, []); // Runs once on mount

  return (
    <div>
      {data ? <p>{data.message}</p> : <p>Loading...</p>}
    </div>
  );
}



✔ Used for: fetching data, cleanup, timers, DOM manipulation.

# ✅ Summary

React allows functions to be used in multiple ways:

  Method	                                 Usage
Event Handlers	                 Triggered by user interactions
Direct Calls	                   Internal logic inside component
Props Functions	                 Parent → Child communication
Callback Functions	             Child → Parent communication
useEffect	                       Handle side effects