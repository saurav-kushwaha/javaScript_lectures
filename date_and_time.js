// Date and time 

let myDate = new Date();// created a new date object
//console.log(myDate); //2025-04-23T12:47:08.979Z

// date methods
console.log(myDate.toString()); //Wed Apr 23 2025 18:20:16 GMT+0530 (India Standard Time)
console.log(myDate.toDateString()); //Wed Apr 23 2025   
console.log(myDate.toTimeString()); //18:20:16 GMT+0530 (India Standard Time)
console.log(myDate.toLocaleString()); //23/4/2025, 6:20:16 pm
console.log(myDate.toLocaleDateString()); //23/4/2025
console.log(myDate.toLocaleTimeString()); //6:20:16 pm
console.log(myDate.toISOString()); //2025-04-23T12:50:16.201Z
console.log(myDate.toUTCString()); //Wed, 23 Apr 2025 12:50:16 GMT
console.log(myDate.toJSON()); //2025-04-23T12:50:16.201Z


console.log(typeof myDate); //object


// we can also pass the date and time in the constructor of the date object
// month is 0 indexed, so 0 is January and 11 is December
let myCreatedDate = new Date(2024 , 0 ,22);
//console.log(myCreatedDate.toDateString()); //Mon Jan 22 2024

let myNewDate = new Date(2024 , 0 , 22 , 5 ,3);
//console.log(myNewDate.toLocaleString()); //22/1/2024, 5:03:00 am


let myNewDate1 = new Date("2023-01-14");
//console.log(myNewDate1.toLocaleString());


let myNewDate2 = new Date("01-14-2024"); 
//console.log(myNewDate2.toLocaleString()); //14/1/2024, 12:00:00 am


// TimeStamp
let myTimeStamp = Date.now(); // returns the number of milliseconds since January 1, 1970
console.log(myTimeStamp);//1745414660773

console.log(myDate.getTime());//1745414660764

// converting milliseconds to seconds
console.log(Date.now() / 1000); //1745414660.774
// it's difficult to read time with decimal points so we can use Math.floor to round it down
console.log(Math.floor(Date.now() / 1000)); //1745414660


let newDate = new Date(); 
console.log(newDate);
console.log(newDate.getFullYear()); //2025
console.log(newDate.getMonth()+1);//4
 
let formattedDate = newDate.toLocaleString('default',
     { month: 'long',
        year: 'numeric',
        day: 'numeric',
       
      }); 
console.log(formattedDate);