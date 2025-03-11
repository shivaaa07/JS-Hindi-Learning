const accountId = 12345;
let accountEmail = "shivasahani@gmail.com";
var accountPassword = "Sahani#123";
accountCity = "Jaipur";
let accountState;

// accountId = 2;

// console.log(accountId);  // Not Allowed to re-assign to constant variable

accountEmail = "shiva@google.com";
accountPassword = "Google#321";
accountCity = "Bengaluru";

/*
    prefer not to use var keyword 
    because of issue in block scope and functional scope
*/

console.table([accountId, accountEmail, accountPassword, accountCity, accountState]);