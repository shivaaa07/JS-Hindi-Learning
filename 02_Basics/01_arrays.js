// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const numbers = [];

const fruits = new Array("Kiwi", "Mango", "Pinepple", "Banana");

const prograamingLangauges = Array(
  "HTML",
  "CSS",
  "JavaScript",
  "Node.js",
  "Express.js",
  "Angular.js",
  "Tailwind.CSS"
);

// console.log(numbers);
// console.log(fruits);
// console.log(typeof PrograamingLangauges);

// ++++++++++++++++++++++ Methods +++++++++++++++++++

// numbers.push(11);
// numbers.push(100);
// numbers.pop();

// numbers.unshift(12);
// numbers.unshift(11);
// numbers.shift();        // When array is empty then it return the empty array and if the array has element it remove from start of array
// console.log("A :", prograamingLangauges);

// console.log(prograamingLangauges.slice(2, 5));

// console.log("B :", prograamingLangauges);

// console.log(prograamingLangauges.splice(2, 5));

// console.log("C :", prograamingLangauges);

const mixOfArray = [1, 2, 3, 4, 5, true, "Shiva", null];

const otherArray = [...mixOfArray];

otherArray.push("Sahani");

console.log("Mix of Array:", mixOfArray);
console.log("Other Array: ", otherArray);
