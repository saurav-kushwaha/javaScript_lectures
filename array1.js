// Array 
// Decelaration of an array
const myArr = [0,1,2,3,4,5,6];
// can't be access an array using  arbitrarty index
// console.log(myArr["one"]);

// Array follows zero based index
// Array follows shallow copy-share the same reference
// Array follows deep copy- create a new reference and copy the value .it is not share the same reference
// Arrays always create shallow copy


const myArr1 = [0,1,2,"saurav","rahul",true];// it can store any type of data
const myArr2 = new Array(1,2,3);// can create an array using new keyword
const myArr3 = new Array(5);// it will create an empty array of length 5    

console.log(myArr);// [ 0, 1, 2, 3, 4, 5, 6 ]

// Array methods


//1. Array.push() - add an element at the end of the array

myArr.push(7);
console.log(myArr);// [ 0, 1, 2, 3, 4, 5, 6, 7 ]
myArr.push(8,9);
console.log(myArr);// [ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9 ]

//2. Array.pop() - remove an element from the end of the array
myArr.pop();
console.log(myArr);// [ 0, 1, 2, 3, 4, 5, 6, 7, 8 ]
myArr.pop();
myArr.pop();
console.log(myArr);// [ 0, 1, 2, 3, 4, 5, 6 ]

//3. Array.shift() - remove an element from the beginning of the array
myArr.shift();
console.log(myArr);// [ 1, 2, 3, 4, 5, 6 ]

//4. Array.unshift() - add an element at the beginning of the array
myArr.unshift(0);
console.log(myArr);// [ 0, 1, 2, 3, 4, 5, 6 ]
// myArr.unshift(-1,-2,-3);
// console.log(myArr);// [ -1, -2, -3, 0, 1, 2, 3, 4, 5, 6 ]


//5. Array.slice() - return a shallow copy of a portion of an array into a new array object selected from start to end (end not included) where start and end represent the index of items in that array. The original array will not be modified.

console.log("A",myArr);
const myN1 = myArr.slice(1,3);
console.log(myN1);// [ 1, 2 ] - it will create a new array from index 1 to index 3 (end not included)
console.log("B",myArr);// [ 0, 1, 2, 3, 4, 5, 6 ] - original array will not be modified

//6. Array.splice() - changes the contents of an array by removing or replacing existing elements and/or adding new elements in place. The original array will be modified.
// The splice() method changes the contents of an array by removing or replacing existing elements and/or adding new elements in place. The original array will be modified.

const myN2 = myArr.splice(1,3);// it will remove 3 elements from index 1 and return the removed elements
console.log(myN2);// [ 1, 2, 3 ] - it will return the removed elements
console.log("C",myArr);// [ 0, 4, 5, 6 ] - original array will be modified


console.log(myArr.includes(4));// true - it will check if the array includes the element 4 and return true or false boolean value

console.log(myArr.indexOf(4));// 1 - it will return the index of the element 4 in the array
console.log(myArr.indexOf(10));// -1 - it will return -1 if the element is not found in the array


// 7. Array.join() - join all elements of an array into a string and return the string. The original array will not be modified.
const newArr = myArr.join();
console.log(myArr);
console.log(typeof newArr);// string - it will return a string
console.log(newArr);// 0,4,5,6 - it will return a string of all elements of the array joined by comma