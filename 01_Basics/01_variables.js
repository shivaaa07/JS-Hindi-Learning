const accountId = 123;
let accountEmail = "shiva@google.com";
var accountPassword = "Shiva#123";
accountCity = "Jaipur";
let accountState;

// accountId = 097;        // Not Allowed to re-assign the value of constant variable

accountEmail = "ss@microsoft.com";
accountPassword = "Sahani@123";
accountCity = "Mumbai";

// console.log(accountId);

console.table([accountId, accountEmail, accountPassword, accountCity, accountState])


/*
    Prefer not to use "var" keyword for assign the variable in JS 
    because of issue in block scope and functional scope 
*/