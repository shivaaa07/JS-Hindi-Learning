/*
In JS have Two Types of DataTypes.
1) Primitive
    - String
    - Number
    - Boolean
    - Null
    - undefined
    - BigInt
    - Symbol
2) Non-Primitive
    - Array
    - Object
    - function
*/

let userName = "Shiva";
let age = 28;
let isLoggedIn = false;
let outSiteTemp = null;
let state;

let firstUserId = Symbol(123)
let secondUserId = Symbol(123)


// console.log(firstUserId === secondUserId)

const obj1 = {
    name: "Sahani",
    city: "Thane"
}

// console.log(typeof obj1)

// ++++++++++++++++++++++++++++++ Stack and Heap Memory +++++++++++++++++++++++++++++

// stack (Primitive)
let firstUserCompanyName = "Realatte";

let secondUserCompanyName = firstUserCompanyName;

secondUserCompanyName = "Chai aur Code"

// console.log(firstUserCompanyName);
// console.log(secondUserCompanyName);

// Heap (Non-primitive)

let obj2 = {
    email : "user@google.com",
    isAdmin: false
};

let obj3 = obj2;

obj3.email = "shiva@google.com"

console.log(obj2);
console.log(obj3);
