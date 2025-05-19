// Reduce Method 

const nums = [1,2,3];
// const myTotal = nums.reduce(function(acc,currVal){
//     console.log(`acc : ${acc} and CurrVal : ${currVal}`);
//     return acc + currVal;
// },0);// value given after comma then it will come in accumulator
//console.log(myTotal);


const myTotal = nums.reduce((acc,currVal)=>acc + currVal,0)
//console.log(myTotal);



// shopping cart example 

 const shoppingCart = [
    {
        itemName:"js course",
        price:299
    },
    {
        itemName:"java course",
        price:399
    },
    {
        itemName:"python course",
        price:199
    },
    {
        itemName:"data science course",
        price:12000
    },
    {
        itemName:"ai course",
        price:15000
    },
    {
        itemName:"machine learning course",
        price:20000
    },
    {
        itemName:"c++ course",
        price:199
    },
]

let payTotal = shoppingCart.reduce((acc,item)=>acc + item.price,0);
console.log(`Total Number of Items : ${shoppingCart.length}`);
console.log(`Total Amount to pay : ${payTotal}`);
