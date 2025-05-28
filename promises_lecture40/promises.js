// promises are used to handle asynchronous operations in JavaScript
// they can be in one of three states: pending, fulfilled, or rejected

// A promise is an object that represents the eventual completion (or failure) of an asynchronous operation and its resulting value.
// A promise can be created using the Promise constructor

const promiseOne = new Promise(function(resolve,reject){
    // Simulating an asynchronous operation using setTimeout
    // Do some asynchronous operation
    // DB calls, cryptography, network requests, etc.
    setTimeout(function(){
        console.log('Asynchronous operation completed');
        resolve();
    },1000);
})
// The resolve function is called when the asynchronous operation is successful
// The reject function is called when the asynchronous operation fails
promiseOne.then(function(){
    console.log('Promise consumed successfully');
})


// creating promise without storing it in a variable
new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log('Async task 2 completed');
        resolve();
    },1000);
})
.then(function(){
    console.log('Promise 2 consumed successfully');
})




// promise three

const promiseThree = new Promise(function(reslove,reject){
    setTimeout(function(){
        //pass data to the resolve function
        reslove({username:'saurav',email:'abcderf@gmail.com'});

    },1000);
})// consuming the promise 
// The then method is used to handle the resolved value of the promise
promiseThree.then(function(user){
    console.log(user);
})



// Promise four with error handling 

const promiseFour = new Promise(function(resolve,reject){
    setTimeout(function(){
        const error = false; // Simulating an error it may be true or false
        // If error is true, reject the promise
        // If error is false, resolve the promise
        if(!error){
            resolve({username:'saur',password:'1234'});
        }else{
            reject('ERROR :: Something went wrong');
        }
    },1000);
})
// consuming the promise with error handling
// then chaning is used to handle the resolved value of the promise
promiseFour.then(function(user){
    console.log(user);
    return user.username; // returning a value to the next then
}).then(function(name){
    console.log(`Username is ${name}`);
}).catch(function(error){
    console.log(error);
}).finally(function(){
    console.log('The promise is either resolve or rejected');
})



// The finally method is used to execute a function when the promise is settled (either resolved or rejected)
// It does not receive any arguments and is useful for cleanup actions
// It is called after the promise is settled, regardless of its outcome


// Promise Five
const promiseFive = new Promise(function(resolve,reject){
    setTimeout(function(){
        const error = false; // Simulating an error it may be true or false
        if(!error){
            resolve({username:'js',email:'scf123@gmail.com'});
        }else{
            reject('ERROR :: Something went wrong in promise five');
        }
    },1000);
})
// consuming the promise with error handling
// async/await syntax is used to handle promises in a more readable way
async function consumePromiseFive(){
    try{
        const response = await promiseFive; // wait for the promise to resolve
        console.log(response);
        
    }
    catch(error){
        console.log(error);
    }
}
consumePromiseFive();



// async functions 

// async function getAllUsers(){
//     try{
//         const res =  await fetch('https://jsonplaceholder.typicode.com/users');
//         const data = await res.json(); // wait for the response to be converted to JSON
//         console.log(data);
//     }
//     catch(error){
//         console.log('ERROR :: ', error);
//     }

// }
// getAllUsers(); // calling the async function to fetch users from the API

fetch('https://jsonplaceholder.typicode.com/users')
.then((response)=>{
    return response.json(); // converting the response to JSON  
})
.then((data)=>{
    console.log(data); // logging the data to the console
})
.catch((error)=>{
    console.log('ERROR :: ', error); // handling any errors that occur during the fetch
})