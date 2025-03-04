/*
 JavaScript has three type of DataTypes
 1) var
 2) let 
 3) const
*/

const userAaddharCardNumber = 744841193358;
let userName = "Shiva Sahani";
var age = 28;
city = "Jaipur";
let userState = null;

// userAaddharCardNumber = 123456789011;           // can not re-assign the value aggain in const variable
userName = "Shivaa Sahaniii";             // can not re-declare the variable but re-assign the value in let variable allow
var age = 18;                   // re-declare and re-assign the value in "var" keyword is allowed do not use this keyword for variable assignment

city = "Mumbai"             // Do not use this types of variable declaration this is bad practies

console.table([userAaddharCardNumber, userName, age, city, userState]);
