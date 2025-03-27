/*
  1) What is Function in JavaScript
  Ans) In JS, a function is a reusable block of code design to perform specific task.
  => A function definition is also called a function declaration or function statement consist of the funtion keyword.
*/

// Normal Funtion
function greeting() {
  return `Welcome to JS Youtube Serise by Hitesh Sir.`
}
// console.log(greeting());

// Funtion with Parameter
function squareOfNumber(number) {
  return `The Square of number ${number} is : ${number * number}`;
}

// console.log(squareOfNumber(4));

// function with opational parameter
function addTwoNumber(num1 = 10, num2 = 21) {
  return `The Sum of Two number is : ${num1 + num2}`
}
// console.log(addTwoNumber(12, 12));

// let name = "Jyoti Das";

const funObj = {
  name: "Shiva",
  age: 18,
  arrowFunction: ()=> {
    console.log(`Hello ${this.name}`)
  },
  normalFuntion: function() {
    console.log(`Welcome ${this.name}`);
  }
}

funObj.arrowFunction();
funObj.normalFuntion();
