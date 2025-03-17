const score = 100;

// const { score } = req.body;   // 100, "100", "100abc", "abc"

const balance = new Number(400);

const gameCount = Number(500);

// console.log(`${score} : ${typeof score}`);
// console.log(`${balance} : ${typeof balance}`);
// console.log(`${gameCount} : ${typeof gameCount}`);

// console.log(gameCount.toExponential(3));
// console.log(gameCount.toFixed(2));
console.log(gameCount.toString().length);

// +++++++++++++++++++++++++++++++ Maths ++++++++++++++++++++++++++++

const randomNumber = Math.random() * 100;

// console.log(Math.floor(randomNumber));
// console.log(Math.ceil(randomNumber));
// console.log(Math.round(randomNumber));

// console.log(Math.pow(2, 4));

let numbers = [1, 2, 3, 4, 15, 6, 7, 8, 9, 10];

// console.log(Math.max(...numbers));
// console.log(Math.min(...numbers));

const showMessage = (marks) => {
  const txt = marks ?? "Absent";
  console.log(`Marks : ${txt}`);
};

// showMessage("Shiva");
// showMessage("");
// showMessage("Sahani");
