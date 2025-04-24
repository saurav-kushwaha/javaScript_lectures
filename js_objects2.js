// singleton
//const tinderUser = new Object();// singleton object
const tinderUser = {}// non singleton object
// output will be same for both the objects {}

tinderUser.id = "1234";
tinderUser.name = "John Doe";
tinderUser.age = 30;
tinderUser.isLoggedIn = false;
console.log(tinderUser); // { id: '1234', name: 'John Doe', age: 30, isLoggedIn: false }


// Nesting of objects
const regularUser = {
    email:"abcd@gmail.com",
    fullname:{
        userfullname:{
            firstName:"John",
            lastName:"Doe",
        }
    }
}
// accessing the value of nested object
console.log(regularUser.fullname.userfullname.firstName); // John
console.log(regularUser.fullname.userfullname.lastName); // Doe
console.log(regularUser.fullname.userfullname); // { firstName: 'John', lastName: 'Doe' }

// merging two objects
const user1 = {
    1: "one",
    2: "two",
    3: "three",
};
const user2 = {
    4: "four",
    5: "five",
    6: "six",
    7: "seven",
   
}

const user3 = {user1,user2}
console.log(user3); // { user1: { '1': 'one', '2': 'two', '3': 'three' }, user2: { '4': 'four', '5': 'five', '6': 'six', '7': 'seven' } }

// using assign method to merge two objects
// Object.assign() method is used to copy the values of all enumerable own properties from one or more source objects to a target object. It returns the target object.
//const user4 = Object.assign(user1, user2);
const user4 = Object.assign({}, user1, user2);
console.log(user4); // { '1': 'one', '2': 'two', '3': 'three', '4': 'four', '5': 'five', '6': 'six', '7': 'seven' }

console.log(user4[1]); // one


// using spread operator to merge two objects
const user5 = {...user1, ...user2};
console.log(user5); // { '1': 'one', '2': 'two', '3': 'three', '4': 'four', '5': 'five', '6': 'six', '7': 'seven' }


// when values come from DB
const users = [
    { id: 1,email:"abx@gmail.com"  },
    { id: 2, email:"jane.doe@gmail.com" },
    { id: 3, email:"jim.doe@gmail.com" },
];


console.log(tinderUser); 
console.log(Object.keys(tinderUser)); // [ 'id', 'name', 'age', 'isLoggedIn' ] // keys of the object
console.log(Object.values(tinderUser)); // [ '1234', 'John Doe', 30, false ] // values of the object
console.log(Object.entries(tinderUser)); // [ [ 'id', '1234' ], [ 'name', 'John Doe' ], [ 'age', 30 ], [ 'isLoggedIn', false ] ] // key value pair of the object
console.log(Object.hasOwnProperty.call(tinderUser, "isLoggedIn")); // true // check if the object has the property or not