// call() method allows you to call a function with a given this value and arguments provided individually.
// It is a method of Function prototype.
// It is used to invoke a function with a specified this value and arguments.
function SetUsername(username){
    //complex DB calls
    this.username = username
    console.log("called");
}

function createUser(username, email, password){
    SetUsername.call(this, username)
   
    this.email = email
    this.password = password
}

const chai = new createUser("chai", "chai@fb.com", "123")
console.log(chai);