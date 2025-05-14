// Higher order loops
// ['','','',''] strings inside array
// [{},{},{}] objs inside array

const array = [1,2,3,4,5];
//for(const iterator of object)
for(const num of array){
   // console.log(num);
}

const greetings = "Hello world!";
for (const greet of greetings){
    if(greet==" ")
        break;
    //console.log(greet);
    
}
const greeting = "Hello world!";
for (const greet of greeting){
    if(greet==" ")
        continue;
    //console.log(greet);
    
}


// Maps // object

 // collection of key pairs
const myMap = new Map();
// Adding key-value pairs
myMap.set('name', 'John');
myMap.set('age', 30);
myMap.set('city', 'New York');

// Iterating over the map
for (const key of myMap) {
//console.log(key);// only log the key and value in arry form
}
// Iterating over the map
for (const [key, value] of myMap) {// following array de-structuring
   // console.log(`${key}: ${value}`);// log value in key value pair
}

// for of loop not work for object

// for in loop works for  object

const objs = {
    name:"sauarav",
    age:24,
    gener:'male'

}

for(const key in objs){
    //console.log(key);// log only key of object
}
for(const key in objs){
   // console.log(objs[key]);// log only value of object
}
for(const key in objs){
    //console.log(`${key}:${objs[key]}`);// log key and value of object
}


// Map is not iteratable so we can't use for in loop

// const  map = new Map();
// // Adding key-value pairs
// map.set('name', 'John');
// map.set('age', 30);
// map.set('city', 'New York');
// for(const key in map){
//     console.log(key);
// }


// forEach loop widely use in array

const coding = ['js','py','cpp','rb'];
coding.forEach(function(item){
   // console.log(item);
})

coding.forEach((item)=>{
    //console.log(item);
})


function printMe(item){
    //console.log(item);
}
coding.forEach(printMe)// passing function reference


coding.forEach((item,index,list)=>{
   // console.log(item , index , list);// log item item index item list as array
})


// Array of objects
// such type of object generally come from database

const myCoding = [
    {
        langName:"js",
        langFile:".js"
    },
    {
        langName:"py",
        langFile:".py"
    },
    {
        langName:"rb",
        langFile:".rb"
    }
]

myCoding.forEach((item)=>{
    console.log(item.langName);
})