// Comparrision always returns boolean value i.e ture or false
console.log(2>1); // true
console.log(2<1); // false
console.log(2>=1); // true
console.log(2<=1); // false
console.log(2==1); // false
console.log(2!=1); // true



// problems aries here when we compare two different data types
console.log(2 == '2'); // true (loose equality)
console.log(2 === '2'); // false (strict equality)
console.log(2 != '2'); // false (loose inequality)
console.log('02'>1); // true (strict inequality)
console.log('2'>2); // false (loose equality)


console.log(null>0);//false
console.log(null>=0);//true
console.log(null<0);//false
console.log(null<=0);//true
console.log(null==0);//false


console.log(undefined>0);//false
console.log(undefined>=0);//false
console.log(undefined<0);//false
console.log(undefined<=0);//false
console.log(undefined==0);//false

// strict equality operator (===) checks both value and type
console.log("2"===2); // false (string and number are different types)
console.log(2===2); // true (both are numbers)