const score = 4000;

// const { gameScore } = req.body;

const balance = new Number(100);

const gameCount = Number(200);

// console.log(typeof score);
// console.log(typeof balance);
// console.log(typeof gameCount);

// console.log(score.toExponential(5));
// console.log(score.toFixed(2));
// console.log(score.toLocaleString());
// console.log(score.toString(16));

// ++++++++++++++++++++++++++++++ Maths +++++++++++++++++++++++++++++

let randomNumber = Math.random();

// let naturalNumber = Math.floor(randomNumber * 10);
// let naturalNumber = Math.ceil(randomNumber * 10);
let naturalNumber = Math.round(randomNumber * 10);

// console.log(randomNumber);
// console.log(naturalNumber);

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const maxValue = Math.max(...numbers);
const minValue = Math.min(...numbers);

console.log(maxValue);
console.log(minValue);

console.log(Math.pow(2, 4));
