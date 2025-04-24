// singleton
// when we create objects with constructor functions, we can create a singleton by using the new keyword
//Object.create



// Initialize one symbole and add it in to the object and then try to access it
const mySymbol = Symbol('key1');
// Object literal
const jsUser = {
    // added sybmbol as key in the object
    [mySymbol]: "value",
    name: 'John',
    age: 30,
    location: 'New York',
    email:'xyaddjs@google.com',
    isLoggedIn: false,
    lastLoggedInDays:["Monday", "Tuesday", "Wednesday"],
    "full name": "John Doe",
    1: "one"
  
};
// by default key is string
// we can use any data type as key, but it will be converted to string

// accessing value of object
console.log(jsUser.name); // John
console.log(jsUser['name']); // John
console.log(jsUser.age); // 30
console.log(jsUser['age']); // 30
//console.log(jsUser.full name)// SyntaxError
//  bracket notation is  only applicable  to access the value of object this time
console.log(jsUser["full name"]) // John Doe
console.log(jsUser[1]) // one // not possible to access to it with dot notation
console.log(jsUser["1"]) // one
console.log(jsUser["1"] === jsUser[1]) // true



// changing values of jsUser object
jsUser.email = "newemail@example.com";
console.log(jsUser.email); // newemail@example.com

// adding new key value pair to object
jsUser.isLoggedOut = true;
console.log(jsUser.isLoggedOut); // true

// adding new key value pair to object using bracket notation
jsUser["isActive"] = false;
console.log(jsUser.isActive); // false

console.log(jsUser);

// if we want to lock the object that is, we don't want to change the values of the object, we can use Object.freeze() method

// Object.freeze(jsUser);
// jsUser.name = "kumar"; // this will not change the value of name property
// console.log(jsUser.name); // John




//++++++++++++++++++++++++++++++++++++++++++++


// symbol concept 

console.log(jsUser[mySymbol]); // value



// function in object
jsUser.greeting = function(){
    console.log("Hello, js user!");
}
console.log(jsUser.gretting);
console.log(jsUser.greeting()); // Hello, js user!


jsUser.greetingTwo = function(){
    console.log(`Hello, js user , ${this.name}`);// this used to access current calling the object property
}

console.log(jsUser.greetingTwo()); // Hello, js user , John