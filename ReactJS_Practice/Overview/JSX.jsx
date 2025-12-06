// JSX- JavaScript + HTML

// To create ele in .js file (JS), we have to write :
var h1 = document.createElement('h1')
h1.innerHTML = "Hi"

// but using .jsx file,
var h1 = <h1>Hi</h1>


//Fn in js
function fnName() {
  console.log("Hii");
}
// fnName()  //call fn

//In jsx
<fnName />   //call fn


// In jsx, name of fn can start from capital,
function FnName() {
  console.log("Hii");
}

FnName()   //both will work to call fn in jsx
//  <FnName />



// JSX (JavaScript XML) is a syntax extension for JavaScript, popularized by React, that lets you write HTML-like code directly in your
//  JavaScript files to describe UI, making component creation intuitive. 
// It's not actual HTML but gets "transpiled" (converted) by tools like Babel into standard JavaScript function calls, essentially turning tags like &lt;h1&gt;Hello&lt;/h1&gt; into React.createElement('h1', null, 'Hello'). 
// JSX supports embedding JavaScript expressions in curly braces {} and requires properly closed tags and a single top-level parent element.   

// Key Features & Rules 

// • HTML in JS: Write familiar HTML structures within your JavaScript files. 
// • Expressions: Embed any valid JavaScript expression (variables, functions) inside curly braces {}. 
// • Attributes: Use quotes for string attributes (e.g., href="url") and curly braces for JavaScript expressions (e.g., className={myClass}). 
// • Children: JSX tags can contain other elements as children. 
// • Single Parent: A JSX expression must have only one root/parent element (e.g., wrap multiple elements in a &lt;div&gt; or &lt;React.Fragment&gt;). 

// Example 
// // JSX
// const element = <h1>Hello, {name}!</h1>;

// // Transpiled into JavaScript (simplified)
// const element = React.createElement('h1', null, 'Hello, ', name, '!');

// Why it's Used with React 

// • Declarative UI: Makes describing what the UI should look like very clear and concise. 
// • Component-Based: Ideal for building reusable UI components.  
// • Readability: Developers find it easier to visualize the UI structure within the component's logic.