const accountId = 123;
let accountEmail = "shiva@google.com";
var accountPassword = "Shiva@1223";
accountCity = "Mumbai";
let accountState;

// accountId = 2;   // Not allowed

accountEmail = "ss@google.com";
accountPassword = "Sahani#1213";
accountCity = "Jaipur"

// console.log(accountId);

/*
    Prefer not to use var keyword for variable declaration
    because of issue in block scope and functional scope
*/

console.table([accountId, accountEmail, accountPassword, accountCity,, accountState]);

