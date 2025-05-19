//  forEach loop 

const coding = ['js','ruby','java','python'];
const codeValue =coding.forEach((item)=>console.log(item)
// {
// return item;// forEach always return undefined
// }
)
//console.log(codeValue);



// filter Method

const myNums=[1,2,34,5,6,7];
const val = myNums.filter((num)=>num>4)
//console.log(val);

// filter return value
// const val = myNums.filter((num)=>{
//    return num>4;
// })
// console.log(val);

// Operation performed above now performing same operation using forEach

const myNewNums = [];
myNums.forEach((num)=>{
if(num > 4){
    myNewNums.push(num);
}
})
//console.log(myNewNums);


// for pratice 

const book = [
    {
        title:"Book one",genre:"fiction",publish:1945,edition:2000

    },
    {
        title:"Book two",genre:"fiction",publish:1946,edition:1950

    },
    {
        title:"Book three",genre:"History",publish:1960,edition:1966

    },
    {
        title:"Book four",genre:"science",publish:1991,edition:2001

    },
    {
        title:"Book five",genre:"Non-fiction",publish:1990,edition:2005

    },
    {
        title:"Book six",genre:"science",publish:1999,edition:2003

    },
    {
        title:"Book seven",genre:"History",publish:1960,edition:2012

    }
]

// using filter method 
//  const userBook = book.filter((bk)=>bk.genre==="History")
//  console.log(userBook);

// filtered book with genre and edition
//  const userBook = book.filter((bk)=>bk.genre==="History" && bk.edition > 2000)
//  console.log(userBook);

// filtering book with publish and gener 
// // console.log(userBook);


// filtering book using only edition
 const userBook = book.filter((bk)=>bk.edition > 2000)
 console.log(userBook);