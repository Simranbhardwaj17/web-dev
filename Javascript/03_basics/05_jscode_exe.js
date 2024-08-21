// l-25
// Js Execution Context:-means how js run/exe file
// run prog in 2 phase
// When take js code 1st form global EC & refer to var "this"
// EC of browser & nodejs(every environent) r differ
// Browser imp .so, In it value of this is "window obj"
// so,when react code not work it means u render on server site & no access of window obj
// GEC must either value avail or not
// GEC or G Environment

// It execute on thread
// Js single threaded, everything in it is a process


// //EC
// 1.GEC
// 2.Function/al EC
// 3. Eval EC     (Get to know in mongoose doc)
//     "  its property of global obj

// Js code run in 2 phase
// 1.Memory creation phase/ Creation ph-- allocate space/location to var
// 2.Execution phase --



// How code execute?++++++++++++++++++++++++++++++++++===

// let val1 = 10
// let val2 = 4
// function addNum(num1, num2) {
//     return num1 + num2
// }
// console.log(addNum(val1, val2));
// console.log(addNum(1, 2));

// or

let val1 = 10
let val2 = 4
function addNum(num1, num2) {
    let sum = num1 + num2
    return sum  
}
let sum1 = addNum(val1, val2);
let sum2 = addNum(1, 2);

// 1.very 1st GE(coz evry prog run by it) & locate it to this
// 2.Memory phase:  only store var(not initialise)
//    val1:- undefined
//    val2:-undefined
//    addNum:- definition (41 to 44)
//    sum1:- undefined
//    sum2:-undefined

// 3. Execution phase:  
//      val1: 10
//      val2: 4
//      //(line 41 to 44) nothing to exe
//      45: again excution context form 
//       ____________________    
//      |new var enviroment |
//      |          +        |
//      |    Exe thread     |
//      |                   |
//      |___________________|
//               |    The num of time f_exe,the box will be created :-cld as new EC
//               |    again MP & EP def for addNum
//     __________|___________________________         
//    |                                      |
//    MP                                    EP
//    val1:- undefined                     num1:- 10
//    val2:-undefined                      num2:- 4
//    sum:-undefined                       sum:- 14  //now this sum return to GEC & created GEC deleted
 
// again same for line:46 GEC created....& at end sum = 4 retun to main GEC


// ---------------------------::Call Stack::------------------------
// If multinested func will be called:
// function one() {
//     console.log("1");
// }   
// function two(){
//     console.log("2");
// }      
// function three() {
//     console.log("3");   
// }
// one()
// two()       
// three()
// ___________
// |          |       It follow LIFO
// |          |          out:                
// |  three() |           1. three()                             
// |  two()   |           2. two()              
// |  one()   |           3. one()               
// |  GEC     |                           
// |__________|                           
// 1. GEC form 
// 2. one then two then three go but 1st three come out of stack






