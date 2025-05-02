// This file demonstrates global and local scope in JavaScript.
 //let a = 10; // Global variable
// const b = 20; // Global constant
var c = 30; // Global variable

// console.log(a); // 10
// console.log(b); // 20
// console.log(c); // 30

// {} is a block scope in JavaScript 
// {} is not a function scope in JavaScript
if (true) {

  let a = 100; // Local variable (block scope)
  const b = 200; // Local constant (block scope)
  var c = 300; // Global variable (function scope)
  //c=300; this will work

   console.log("INNER :",a); // 100 (local variable)
//   console.log(b); // 200 (local constant)
//   console.log(c); // 300 (global variable, but redefined in this block)
}

// console.log(a); // not defined (local variable) 
// console.log(b); // not defined (local constant)
//console.log(c); // 300 (global variable, redefined in the block) 



//++++++++++++++++++++++++++INTERESTING  CONCEPT ++++++++++++++++++++++
console.log(addOne(5)); // 6 (function declaration is hoisted)
function addOne(num){// this is a function declaration
    return num+1; 
}
//addOne(5);

console.log(addTwo(5)); //ReferenceError: Cannot access 'addTwo' before initialization
const addTwo = function(num){// this is a function expression
    return num+2; 
}
//addTwo(5);