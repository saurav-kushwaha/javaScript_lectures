const heros = ["saurav","rahul","pappu"];
const dc_heros = ["batman","superman","wonderwoman"];

// heros.push(dc_heros);
// console.log(heros); // [ 'saurav', 'rahul', 'pappu', [ 'batman', 'superman', 'wonderwoman' ] ]
// console.log(heros[3]); // [ 'batman', 'superman', 'wonderwoman' ]
// console.log(heros[3][0]); // batman

// concat method ---takes two arrays and returns a new array
const all_heros = heros.concat(dc_heros);
console.log(all_heros); // [ 'saurav', 'rahul', 'pappu', 'batman', 'superman', 'wonderwoman' ]
console.log(all_heros[3]); // batman
console.log(all_heros[3][0]); // b

// spread operator ---takes two arrays and returns a new array
const all_heros2 = [...heros, ...dc_heros];
console.log(all_heros2); // [ 'saurav', 'rahul', 'pappu', 'batman', 'superman


// Nesting of Array

const arr = [1,2,3,[4,5,6,[7,8,9]]];
const flattenedArr = arr.flat(3);// take infinite depth of array and flatten it
console.log(flattenedArr); // [1, 2, 3, 4, 5, 6, 7, 8, 9]



console.log(Array.isArray("saurav"));// false
console.log(Array.isArray(heros));// true   

// saurav into array
console.log(Array.from("saurav"));// [ 's', 'a', 'u', 'r', 'a', 'v' ]

console.log(Array.from({name:"saurav"}));// [ <1 empty item> ] returns empty array and need to give it's key or value

let score = 100;
let score2 = 200;
let score3 = 300;
console.log(Array.of(score,score2,score3));// [ 100, 200, 300 ]