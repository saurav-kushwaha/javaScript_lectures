const accountId =1234567890;// value cannot be changed
let accountEmail = "saurav132@gmail.com";// value can be changed

var accountPassword = "j88234";// value can be changed
accountCity = "kolkata";// value can be changed because it will be declared as a global variable which take var
let accountState;// without initializing the variable, it will be undefined

//accountId=23; This will throw an error because accountId is a constant
accountEmail = "anil1232@gmail.com";
accountPassword = "887654";
accountCity = "delhi";
// Logging all variables in a table format for better readability
console.table([accountId, accountEmail, accountPassword, accountCity,accountState]);
/*
prefer not to use  var because of issue in block and functional scope
*/