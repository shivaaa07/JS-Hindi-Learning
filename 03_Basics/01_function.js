/*
  1) Whhat is Function
  ans) In JavaScript, a function is a reusable block of code designed to perform specific task.
*/

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

function greeting() {
  console.log("Hello JS User💕");
}
// greeting();

// function with parameter
function square(num) {
  // Parameter
  return `The Square of number ${num} is : ${num * num}.`;
}

// console.log(square(12));      // Argument

// function addTwoNumber(number1, number2) {
//   return `The Addition of ${number1} and ${number2} is ${number1 + number2}.`;
// }

// function with opational parameter
function addTwoNumber(number1 = 12, number2 = 12) {
  return `The Addition of ${number1} and ${number2} is ${number1 + number2}.`;
}

// console.log(addTwoNumber(1, 23));

// function with rest operator in parameter
function calculateCardPrice(...num) {
  let result = 0;
  num.forEach((element) => {
    // console.log(element);
    result += element;
  });
  return result.toFixed(2);
}

// console.log(calculateCardPrice(200, 400, 100, 1000));

const users = {
  name: "Shiva",
  age: 28,
};

function handleObject(anyObject) {
  return `My name is ${anyObject.name} and my age is ${anyObject.age}`;
}

// console.log(handleObject(users));
console.log(handleObject({ name: "Jyoti Das", age: 26 }));

/*
{} => Curly Braces
[] => Square Bracket
() => Pare  ntheses 
*/
