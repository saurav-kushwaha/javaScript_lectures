// stack and heap memory
//Stack(primitive data types) vs Heap(Reference data types)
//Stack memory is used for static memory allocation and Heap memory is used for dynamic memory allocation.
// from stack we get copy of define value and from heap we get reference of value
// changes get reflected in heap memory but not in stack memory

let myName = "saurav"; // stack memory
let myNewName = myName; // copy of myName in stack memory
console.log(myNewName); // "saurav"
myNewName = "saurav kumar"; // changes in myNewName does not affect myName
console.log(myName); // "saurav"
console.log(myNewName); // "saurav kumar"

// heap memory
let myObj = { 
    name: "saurav",
    email: "abcd@gmail.com",
    age: 25 
}; 

let myNewObj = myObj; // reference of myObj in heap memory
myNewObj.email="qqqqq123@gmail.com"; // changes in myNewObj affect myObj
console.log(myObj);// log myObj to see the changes
console.log(myNewObj); // log myNewObj to see the changes

//{ name: 'saurav', email: 'qqqqq123@gmail.com', age: 25 } email get changed in myObj
//{ name: 'saurav', email: 'qqqqq123@gmail.com', age: 25 }