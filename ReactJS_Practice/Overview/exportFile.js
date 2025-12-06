const a = 5

export const arr = [30, 45, 67]  //Named Export

const username = "Simu"

export default username  //Default Export




// In React, which leverages JavaScript's module system, there are two primary types of exports:

// • Named Exports: 
// 	• Named exports allow you to export multiple values (variables, functions, components, etc.) from a single file. 
// 	• They are defined using the export keyword before the declaration of the item. 
// 	• When importing named exports, you must use the exact same names and enclose them in curly braces. 
// 	• Example: 

        // // MyComponents.js
        // export const MyComponent = () => <div>Component A</div>;
        // export const AnotherComponent = () => <div>Component B</div>;

        // // In another file
        // import { MyComponent, AnotherComponent } from './MyComponents';

// • Default Exports: 
// 	• A default export allows you to export a single value (typically a component) as the primary export of a file. 
// 	• It is defined using the export default keywords. 
// 	• When importing a default export, you do not use curly braces, and "you can give the imported value any name you choose". 
// 	• Example: 

        // // MyComponent.js
        // const MyComponent = () => <div>Hello World</div>;
        // export default MyComponent;

        // // In another file
        // import MyComponent from './MyComponent'; // Or import MyAwesomeComponent from './MyComponent';

// Key Differences: 
// • Quantity: A file can have multiple named exports but only one default export. 
// • Import Syntax: Named exports require curly braces and the exact name during import, while default exports 
//                  do not use curly braces and can be imported with any name. 
// • Purpose: Named exports are useful for exporting multiple related utilities or components from a single file, 
//            while default exports are typically used for the main component or value of a module.