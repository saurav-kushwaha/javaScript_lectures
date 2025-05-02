// Arrow function  

const user={
    name:"John",
    price:30,

    welcomemessage:function(){
        console.log(`Welcome ${this.name} to the world of JavaScript`);
        //console.log(this.price);

        // loging this inside obj method
        console.log(this);// current context of the object
    }
}
// loging this outside of obj
// console.log(this);//{} return empty curly braces
// this keyword refers to the object itself
// we use this keyword to access the properties of the object
// we use this keyword for current context
//user.welcomemessage// nothing will happen
// user.welcomemessage();// Welcome John to the world of JavaScript
// user.name="sam";
// user.welcomemessage();// Welcome sam to the world of javaScript


// using this in function declaration
function addOne(){
    console.log(this);// 
}
addOne();// return a global object


function chai(){
    let name = "saurav";
    console.log(this.name);// undefined
}
chai();// undefined



// using this in function expression
const chai1 = function(){
    let name = "saurav";
    console.log(this.name);// undefined
}
chai1();// undefined


// Arrow function using this keyword
const add = () => {
    let name = "saurav";
    console.log(this.name);// undefined
    //console.log(this);// return empty curly braces
}
add();// undefined


// basic syntax of arrow function ()=> {}
// using explicit return
const addTwo = (num1,num2)=>{
    return num1+num2;
}
console.log(addTwo(10,20));// 30

// using implicit return
const addThree = (num1,num2,num3)=> num1+num2+num3;
console.log(addThree(10,20,30));// 60

// if we want to return an object using arrow function then we have to use () brackets
const obj = ()=>({name:"saurav",age:23});
console.log(obj());// { name: 'saurav', age: 23 }
// if we want to return an array using arrow function then we have to use [] brackets
const arr = ()=>[10,20];
console.log(arr());// [ 10, 20 ]




