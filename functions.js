// function 
 function sayhello(){
    console.log("Hello World");
    console.log("Hello World 2");
    console.log("Hello World 3");
    console.log("Hello World 4");
 }
 sayhello();// without () it will not work because it is not a function call it's reference to the function


 // add two numbers function
 function addTwoNumbers(num1,num2){
    console.log(num1+num2);
 }
addTwoNumbers(5,10);// 15
addTwoNumbers(20,"4");// 204
addTwoNumbers(20,"q");//20q
addTwoNumbers();// NaN
addTwoNumbers(1,null);// 1


// storing the function in a variable without returning anything
/*function addTwoNumbers(num1,num2){
    console.log(num1+num2);
 }
 const add = addTwoNumbers(5,10);// 15
 console.log(add);// undefined because the function does not return anything


 // storing the function in a variable with returning something
 function addTwoNumbers(num1,num2){
    return num1+num2;
    //console.log(num1+num2);// this will not work because the function will return before this line
 }
 const add = addTwoNumbers(5,10);// 15
 console.log(add);// 15


 // function with default parameters
 function addTwoNumbers(num1=0,num2=0){
    return num1+num2;
 }
 const add = addTwoNumbers(5,10);// 15
 console.log(add);// 15

 const add = addTwoNumbers(5);// 5
 console.log(add);// 5

 const add = addTwoNumbers();// 0
 console.log(add);// 0

 const add = addTwoNumbers(undefined,10);// 10
 console.log(add);// 10

 const add = addTwoNumbers(null,10);// 10
 console.log(add);// 10

 const add = addTwoNumbers(5,null);// 5
 console.log(add);// 5

 const add = addTwoNumbers(null,null);// 0
 console.log(add);// 0
 */


 function loginuserMessage(username){
    // if username is not provided then return undefined
    if(username === undefined){
        console.log("Please provide a username");
        return ;
    }
    return `${username} logged in successfully`;
    
 }  

 console.log(loginuserMessage("John"));// John logged in successfully
//console.log(loginuserMessage());// undefined logged in successfully work if we remove the if condition
console.log(loginuserMessage()); // Please provide a username