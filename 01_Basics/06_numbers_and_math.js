const score = 400459;

// const { price } = req.body;     // "100"

const gameCount = new Number(100.345);

console.log(typeof score);
console.log(gameCount.toString());
console.log(gameCount.toFixed(2)); // after the dicimal how many digits take

console.log(score.toExponential(3));

console.log(score.toLocaleString("en-US"));

// ++++++++++++++++++++++++++ Maths +++++++++++++++++++++++++++

const randomNumber = Math.floor(Math.random() * 10);

// console.log(randomNumber + 10);

console.log(Math.ceil(4.2));
console.log(Math.floor(4.7));
console.log(Math.round(4.2));

console.log(Math.pow(2, 0));

function showMessage(marks) {
  const message = marks || "Absent";
  console.log(`Marks is : ${message}`);
}

showMessage(75);
showMessage(0);
showMessage(50);
