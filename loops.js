// loops or iteration
// 1. for loop
// 2. while loop
// 3. do while loop
for (let i = 0; i <= 10; i++){
    console.log(`value of i is ${i}`);
}

for (let i = 0; i <= 10; i++){
    console.log(`value of i is ${i}`);
    if(i === 5){
        console.log(`i is equal to 5`);
    }
}

// ******** nesting of for loop ********
// nested for loop is used to iterate over a multi-dimensional array

for (let i = 1; i <= 10; i++){
    console.log(`value of i is ${i}`);
    for (let j = 1; j <= 10; j++){
        console.log(`value of j is ${j}`);
        if(j === 3){
            console.log(`j is equal to 3`);
        }
    }
}


let fruits = ["apple", "banana", "orange"];
for (let index = 0; index < fruits.length; index++){
    const element = fruits[index];
    console.log(`value of element is ${element}`);
    
}



// table of 2 printing
for (let i = 2; i < 3; i++){
    
    for (let j = 1; j <= 10; j++){
        console.log(`${i} * ${j} = ${i * j}`);
        
        }
    
}

for (let i =1; i <=10; i++){
    console.log(`*******Table of  ${i} *******`);
    for (let j = 1; j <= 10; j++){
        console.log(`${i} * ${j} = ${i * j}`);
        
        }
    
}


// *******while loop ********

let i = 0;
while (i <= 10){
    console.log(`value of i is ${i}`);
    i++;
}

const myArray = [100,200,300];
let arr = 0;
while (arr < myArray.length){
    const element = myArray[arr];
    console.log(`value of arr is ${arr}`);
    console.log(`value of element is ${element}`);
    arr++;
}

// ******* do while loop ********
// do while loop is used when we want to execute the loop at least once
// even if the condition is false
// do while loop is used when we want to execute the loop at least once
let score = 0;

do {
    console.log(`value of score is ${score}`);
    score++;

} while (score <= 10);

// ******* keywords ********
// 1. break
// 2. continue
// break is used to break the loop
//continue is used to skip the current iteration of the loop
for (let i = 0; i <= 10; i++){
    if(i === 5){
         console.log(`detected value is ${i}`);
        break;
    }
    console.log(`value of i is ${i}`);
   
}
for (let i = 0; i <= 10; i++){
    if(i === 5){
        console.log(`detected value is ${i}`);
        continue;
    }
    console.log(`value of i is ${i}`);
}