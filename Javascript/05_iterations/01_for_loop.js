// l-27
//initilisation :: index=0
//condition :: index <= 5
//Increment / decrement :: index++ / index--

// for (let index = 0; index <= 5; index++) {
//     // const element = [index];                   //get array of single num
//     const element = index;
//     console.log(element);
// }

// // decrement 
// for (let index = 5; index >= 0; index--) {                 
//     console.log(index);
// }

// for (let index = 1; index <= 10; index + 2) {          //Why infinite             
//     console.log(index);
// }

const newArr = ["A", "N", "S", "H"]
for (let index = 0; index < newArr.length; index++) {
    const name = newArr[index];
    console.log(name); 
}

const newStr = "Simran Bhardwaj"
for (let index = 0; index < newStr.length; index++) {
    const element = newStr[index];
    console.log(element);                         //print index of the string
    // console.log(newStr);?                      //print string in loop
}

// const employeeDetails = ({                    //For loop not working on obj even adding or removing paranthesis(refer 04_for_in file of tthis folder)
//     name: "R",
//     id: 2341,
//     position: "SWE",
//     company: "Google"
// })
// for (let index = 0; index < employeeDetails.length; index++) {
//     const element = employeeDetails[index];
//     console.log(employeeDetails);
//     console.log(element);
// }


for (let index = 0; index < 3; index++) {
    for (let indexOfOther = 3; indexOfOther < 5; indexOfOther++) {
        const element = indexOfOther;
        console.log(element);
    }
    const element = index;
    console.log(element);
}


for (let index = 0; index < 3; index++) {
    for (let indexOfOther = 3; indexOfOther < 5; indexOfOther++) {
        const element = indexOfOther;
        console.log(element);
        console.log(index);
        console.log(indexOfOther);
        const element1 = index;
        console.log(element1);
    }
}

// for loop with if-------
for (let index = 0; index <= 17; index++) {
    const element = index;
    if(index == 2 && element == 2) {
        console.log("Index is now 2");                //execute when condition is true
        console.log(`Element is: ${element}`);
    }
    console.log(element);
}

//Print table using for loop
for (let i = 1; i <= 10; i++) {
    console.log(`Table of ${i} is: `);
    for (let j = 1; j <= 10; j++) {
        // console.log(i, "*",  j, "=" ,i*j);
        console.log(i+ " * "+  j+ " = " +i*j);
    }
}


//Sometimes we don't want to execute a loop at once need condition to stop
//like print 100 books not print on 1 page maybe only 5 in 1 & nxt 5 in other pg

//so we use
//++++++++++++++  break and continue   +++++++++++++++++++==

//break:- to break control flow of code
for (let month = 1; month <= 12; month++) {
    if(month == 11) {
        console.log(`Month is ${month}(November)`);
        console.log("Chhath Puja");
        break;
    }
    console.log(`Month is: ${month} `);
}
// mainly use in switch case


//continue :- means skip the condition for once
for (let month = 1; month <= 12; month++) {
    if(month == 5) {
        // console.log(`Month is ${month}(May)`);
        console.log("Skip this month coz of High Summer");
        continue;
    }
    console.log(`Month is: ${month} `);
}











