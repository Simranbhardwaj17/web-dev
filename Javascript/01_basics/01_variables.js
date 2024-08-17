// Learn to code by investigation method
// const, var, let r keywords that perform operation

const accountId = 223;                           // declare constant:can't change
let accountEmail = "abc@gmail.com";              //let & var use to declare variable
var accountPassword ="3344";
accountCity = "Dehradun";
let accountState;
console.table([accountId, accountEmail, accountPassword, accountCity, accountState])

// accountId = 432;                             TypeError: Assignment to constant variable.
console.log(accountId);
 
accountEmail ="abd@gmail.com"
accountPassword = "2342"
accountCity = "Haridwar";
 
console.table([accountId, accountEmail, accountPassword, accountCity, accountState])

/*
Prefer not to use var coz of issues in block scope & functional scope
ex: As a developer changes value of variable it get changed in whole code
{
   called as scope: use in func, if-else, loop
}
*/

