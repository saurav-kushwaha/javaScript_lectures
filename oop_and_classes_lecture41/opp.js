// object literal in javascript
// object literal means creating an object using curly braces
// Object literal is a way to create an object in JavaScript using key-value pairs

const person = {
    name: "John",
    age: 30,
    greet: function() {
        console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
    }
};
// Accessing properties
console.log(person.name); // John
console.log(person.age); // 30
// Calling method
person.greet(); // Hello, my name is John and I am 30 years old.
// Adding a new property
person.email = "abcd12@gmail.com";
// Accessing the new property
console.log(person.email); //
// Deleting a property
delete person.age;
// Accessing the deleted property
console.log(person.age); // undefined
// Checking if a property exists
console.log("age" in person); // false


// CONSTRUCTOR FUNCTION
// Constructor function is a special type of function that is used to create objects
 
function User(name,age){
    this.name = name;
    this.age = age;
    this.greet = function(){
        console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
    };
    return this;

}
// Creating an object using the constructor function
const user1 = new User('saurav', 22);
const user2 = new User('sanjay', 25);
// loging the objects
// console.log(user1); // User { name: 'saurav', age: 22, greet: [Function] }
// console.log(user2); // User { name: 'sanjay', age: 25, greet: [Function] }
//console.log(user1.constructor)//[Function: User]
console.log(user1 instanceof User); // true

