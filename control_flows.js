// control flows
// if statement
let a = 10;
if (a > 5) {
    //console.log("a is greater than 5");
}


// <,>,<=,>=,!=,!==,===,==

// if else statement
const temperature = 40;
if (temperature === 40){
    //console.log(`less than 50`);
}
else {
    //console.log(`greater than 50`);
}

let score = 200;
if(score > 100){
    let grade = "A";
    //console.log(`Your grade is ${grade}`);
}
//console.log(`Your grade is ${grade}`);//this will throw an error because grade is not defined outside the if block

// scope is implicitly created by the if statement
// not good pratice
let balance = 1000;
if (balance > 500) //console.log(`Your balance is ${balance}`),
    //console.log(`Your balance is greater than 500`);

// if else if statement
 marks = 85;
if (marks >= 90) {
    console.log(`Your grade is A`);
} else if (marks >= 80) {
    console.log(`Your grade is B`);
} else if (marks >= 70) {
    console.log(`Your grade is C`);
} else if (marks >= 60) {
    console.log(`Your grade is D`);
} else {
    console.log(`Your grade is F`);
}
console.log(typeof marks); // number


// logical example && , ||

const userLoggedIn = true;
const debitCarrd = true;
const loggedInFromGoogle = false;
const loggedInFromEmail = true;


// checking codition 
if (debitCarrd && userLoggedIn){
    console.log(`user can buy the course`);
}



if(loggedInFromGoogle || loggedInFromEmail){
    console.log(`Allow user to buy couurse`)
}


// switch case 
// if we use switch case, we can use break statement to break the loop
// if we don't use break statement, it will execute all the cases
// switch case is used to compare the value of a variable with multiple cases
// if we use string then we need to change the case to string
const month = 3;
switch(month){
    case 1:
        console.log(`Month is jan`);
        break;
        case 2:
            console.log('Month is Feb');
            break;
            case 3:
                console.log(`Month is Mar`);
                break;
                default:
                    console.log(`Month is not found`);
                    break;
}


// truthy and fasly values
// falsy values are: 0, "", null, undefined, NaN,-0,bigint 0n,false
// truthy values are: 1, " ","0" [], {}, true,function(){}, -1, Infinity, 

const userEmails = "sample@example.com";
if(userEmails){
    console.log(`got user email`);
} 
else{
    console.log(`no user email`);
}  

// checking an arry is empty  or not
const fruits = [];
if(fruits.length === 0){
    console.log(`Array fruit is empty`);
}
// detecting an Obj is empty or not
const user = {};
if(Object.keys(user).length === 0){
    console.log(`Object user is empty`);
}



//note

console.log(false == 0) // true
console.log(false == "") // true
console.log(false == null) // false
console.log(0 == "") // true



// Nullish Coalescing Operator
// ?? operator is used to check if the value is null or undefined
// if the value is null or undefined, it will return the default value
// const userEmail = null;
// const defaultEmail = "default@example.com";
// const email = userEmail ?? defaultEmail;
// console.log(email); // default@example.com

let val1;
val1 = 10 ?? 20;
console.log(val1);//10


let val2;
val2 = null ?? 20;
console.log(val2);//20

let val3;
val3 = undefined ?? 300;
console.log(val3);//300

let val4;
val4 = 0 ?? 400;
console.log(val4);//0

let val5;
val5 = "" ?? 500;
console.log(val5);//""
// ?? operator is used to check if the value is null or undefined

let val6;
val6 = null ?? 5 ?? 600;
console.log(val6);//5


// ternary operator
// ternary operator is used to check if the condition is true or false
const age = 18;
(age >= 18) ? console.log("Adult") : console.log("Not Adult");