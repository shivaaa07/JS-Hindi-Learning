/*
    JavaScript has two Types of Datatypes.
    1) Primitive
        - String
        - Number
        - Boolean
        - BigInt
        - null
        - undefined
        - symbol
    2) Non-Primitive
        - Object
        - Array
        - Function
*/

let userName = "Shiva";

let otherUserName = userName;

otherUserName = "Sahani";

// console.log("userName is :", userName);
// console.log("otherserName is :", otherUserName);
// console.log("userName is :", userName);

let age = 18;

let originalAge = age;

originalAge = 28;

// console.log(age);
// console.log(originalAge);

// ++++++++++++++++++++++++++++++++++ Non-Primitive(call by Reference) +++++++++++++++++++++++++++++++++++++

let myObj = {
  firstName: "Shiva",
  lastName: "Sahani",
  age: 28,
  city: "Thane",
};

let otherObj = { ...myObj };
// console.log("Before age Updated :", myObj);

Object.freeze(myObj);
otherObj.age = 18;

// console.log("After age updated :", myObj);
// console.log(otherObj);

let myArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let otherMyArray = myArray;

otherMyArray.pop();

console.log(myArray);
console.log(otherMyArray);
