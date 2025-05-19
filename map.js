// Map Method

let myNums = [1,2,3,4,5,6,7,8,9];
// let newNum = myNums.map((num)=>num*10);
// console.log(newNum);

// if scope used and not use return then get undefined as output
// let newNum = myNums.map((num)=>{
//     num*10
// });
// console.log(newNum);

let newNum = myNums.map((num)=>{
    return num*10;
});
console.log(newNum);


// chaining of method 


const newNums = myNums
.map((num)=>num*10)// multiplying num by 10 
.map((num)=>num+1)// then adding 1
.filter((num)=>num>40);// only filter those numbers which are greater than 40
console.log(newNums);