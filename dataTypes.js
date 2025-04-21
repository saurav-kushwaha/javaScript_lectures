"use strict"; // for treating the older code as modern code
// Primitive data types
// 1. String
// 2. Number
// 3. Boolean
// 4. Undefined -->value is not assigned to a variable
// 5. Null --->standalone value which is assigned to a variable to indicate that it has no value
// 6. Symbol (ES6) --->unique value and cannot be changed
// 7. BigInt (ES11) --->arbitrary-precision integer
// 8. Object (ES6) --->collection of key-value pairs
//alert("Saurav kuwar");// we are using node.js so we cannot use alert, we can use console.log instead
console.log("Saurav kuwar");// this will print the string in the console

const accountId = 12345678;
let accountEmail = "kumar123@gmai.com";
let isAvailable = true;
let amountBalance = null;
let amountstate; 
console.log(typeof accountId);//number data type
console.log(typeof accountEmail);// string data type
console.log(typeof isAvailable);// boolean data type
console.log(typeof amountBalance);// object data type (this is a bug in js)
console.log(typeof amountstate);// undefined data type (this is a bug in js)

