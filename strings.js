// Strings
const name = "saurav";
const count = 10;
//console.log(name + count + " times"); //saurav10 times


// use template literals
// use backticks to create a template literal
//console.log(`Hello my name is ${name} and I have ${count} times`); //Hello my name is saurav and I have 10 times



// declaration of string
const str = "Hello World"; // string literal
const str2 = new String("Hello World"); // string object
console.log(str2[0]); // H
console.log(str2.__proto__);// String.prototype
// some methods of string object
console.log(str2.length); // 11
console.log(str2.charAt(0)); // H
console.log(str2.charCodeAt(0)); // 72
console.log(str2.indexOf("o")); // 4
console.log(str2.lastIndexOf("o")); // 7
console.log(str2.substring(0, 5)); // Hello
console.log(str2.slice(0, 5)); // Hello
console.log(str2.slice(-8,4)); //l
console.log(str2.split(" ")); // [ 'Hello', 'World' ]
console.log(str2.replace("World", "Saurav")); // Hello Saurav
console.log(str2.toLowerCase()); // hello world
console.log(str2.toUpperCase()); // HELLO WORLD
console.log(str2.trim()); // Hello World
console.log(str2.includes("Hello")); // true