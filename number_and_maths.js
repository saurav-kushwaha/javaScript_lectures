// Number 

const score = 400;
console.log(score);//400

const balance = new Number(100);
console.log(balance);//[Number: 100]
console.log(balance.toString());//100
console.log(balance.toString().length);//3
console.log(balance.toFixed(2));//100.00
console.log(balance.toExponential(2));//1.00e+2


const otherBalance = 12.54698;
console.log(otherBalance.toPrecision(3));//12.5
console.log(otherBalance.toPrecision(2));//13


const hundereds = 1000000;
console.log(hundereds.toLocaleString('en-US'));//1,000,000
console.log(hundereds.toLocaleString('en-IN'));//10,00,000


//+++++++++++++++++++++++++++++++++++++++++++++
// Maths

console.log(Math);//Object [Math] {}

console.log(Math.abs(-10));//10
console.log(Math.abs(10));//10
console.log(Math.ceil(10.1));//11
console.log(Math.floor(10.9));//10
console.log(Math.round(10.5));//11
console.log(Math.round(10.4));//10
console.log(Math.max(10, 20, 30));//30
console.log(Math.min(10, 20, 30));//10
console.log(Math.pow(2, 3));//8
console.log(Math.sqrt(4));//2
console.log(Math.random());//0.123456789


// Random number between 10 and 20
const min = 10;
const max = 20;
const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;//10-20
console.log(randomNumber);
