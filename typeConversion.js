let score = 13;
// two ways to see the type of a variable
//console.log(typeof score); // number
//console.log(typeof(score)); // number

// *********converting a string to a Number**********
let scoreString = "100";
let scoreNumber = Number(scoreString);
//console.log(typeof scoreNumber); // number
//console.log(scoreNumber); // 100



// **********converting a boolean to a Number***********


let boolValue =false //true; // or false
let boolNumber = Number(boolValue);
// console.log(typeof boolNumber); // number
// console.log(boolNumber); // 1 

// console.log(typeof boolNumber); // number
// console.log(boolNumber); // 0

let str ="";
let number1 = Number(str);
console.log(typeof number1); // number
console.log(number1); // 0

/* Note:  Value        typeof    output
           ""          number     0
           "100"       number     100
           "100qjsj"   number     NaN
           null        number      0
           undefined   number      NaN
            true        number      1
            false       number      0
*/


// ********converting a Number to a Boolean*******
let isLoggedIn = 0; // 0 is false, any other number is true
let isLoggedInBoolean = Boolean(isLoggedIn);
console.log(typeof isLoggedInBoolean); // boolean
console.log(isLoggedInBoolean); // false





/*Note:  Value        typeof    output
          ""          boolean    false
        "qwqe"        boolean    true
           1          boolean      true
           0          boolean     false
          null        boolean    false
        undefined     boolean    false
               
    */


// +++++++++++Converting a Number to a String++++++++++++++

// two ways to convert a number to a string
// 1. using String() function
// 2. using toString() method
let score1 = 100;
let scoreStringValue = String(score1); 
console.log(typeof scoreStringValue); // string
console.log(scoreStringValue); // "100"

// console.log(typeof scoreStringValue); // string
// console.log(score1.toString()); // "100"
