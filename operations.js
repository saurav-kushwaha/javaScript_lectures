//***********OPERATION IN JAVASCRIPT***********
let value = 8;
let negValue = -value;
console.log(negValue);//-8

// Basic Mathematical operations
// console.log(2+2);// 4
// console.log(2-2);//0
// console.log(2*2);// 4
// console.log(2/2);//1
// console.log(5%2);// 1
// console.log(5**2);// 25 (exponentiation operator)

// +++++++++++ String Concatenation ++++++++++
let str1 ="saurav";
let str2 = " kumar";
let str3 = str1 + str2;
//console.log(str3);//saurav kumar


// console.log("1" + 2);//12
// console.log(1 + "2");//12
// console.log(1 + 2 + "3");//33
// console.log("1" + 2 + 3);//123 see the first value

// console.log(1 + 2 + "3" + 4);//334
// console.log("1" + 2 + 3 + 4);//1234

// console.log(2 + 3 * 4 % 3);// for better understanding use brackets
// console.log((2 + 3) * (4 % 3));// 5*1 = 5

console.log(+true);// 1
console.log(+false);// 0
console.log(+null);// 0
console.log(+undefined);// NaN
console.log(+"");// 0



//***************Assignment operator******************/

let num1,num2,num3;
num1=num2=num3=2+2;// not recommended
// console.log(num1);
// console.log(num2);
// console.log(num3);


// ****************Increment and Decrement operator******************/
let gameCouunter = 100;
gameCouunter++;// post increment operator
console.log(gameCouunter);// 101
gameCouunter--;// post decrement operator
console.log(gameCouunter);// 100
