/*
1) What is the Function
Ans) In JavaScript, a function is a reusable block of code designed to perform a specific task. 
*/

// console.log("S");
// console.log("H");
// console.log("I");
// console.log("V");
// console.log("A");
// console.log("A");
// console.log("\n");

// Normal function
function printMyName() {
  console.log("S");
  console.log("H");
  console.log("I");
  console.log("V");
  console.log("A");
  console.log("A");
  console.log("\n");
}

// printMyName();

// function addTwoNumber() {
//     console.log(3 + 5);
// }

// addTwoNumber()

// funtion with parameter
function addTwoNumber(number1, number2) {       // Parameter
    console.log(number1 + number2);
}

// const result = addTwoNumber(12, "12");      // Argummments

// funtion with return Keyword
function greeting(userName = "Guest") {
    return `Welcome ${userName}, How are you?`
}

const msg = greeting("Shiva Sahani");

console.log(msg);