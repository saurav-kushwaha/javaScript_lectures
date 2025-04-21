// datatypes in javaScript
// 1. Primitive Data Types:    
//    - Number

const score = 100; // Number
const scoreValue = 100.5; // Number
//    - String
const name = "John Doe"; // String
//    - Boolean
const isActive = true; // Boolean
//    - Undefined
let age; // Undefined (not assigned yet)
//    - Null
const outsideTemp = null; // Null (intentionally empty value)
//    - Symbol // Unique identifier
const id = symbole("123"); // Symbol (unique identifier)
const id2 = Symbol("123"); // Symbol (unique identifier)
console.log(id === id2); // false (different symbols with same description)
// we can pass same value but its return different id

//    - BigInt
//const bigNumber = 12345678901234567890123456n; // BigInt (large integer)

// 2. Non-Primitive Data Types:
//    - Object
let person = {
    name: "John Doe",
    age: 30,
    isActive: true,
};  // Object (key-value pairs)
// data types in object can be primitive or non-primitive


//    - Array
const fruits = ["apple", "banana", "orange"]; // Array (ordered list of values)
//    - Function
const myFunction=function greet() {
    console.log("Hello, World!");
} // Function (block of code that can be called)



// Returns type  in javaScript
//1. Primitive Data Types:
//number =>number
//string =>string
//boolean =>boolean
//undefined =>undefined
//null =>object
//symbol =>symbol
//bigint =>bigint



//2. Non-Primitive Data Types:
//object =>object
//function =>function
//array =>object (arrays are a type of object in JavaScript)
