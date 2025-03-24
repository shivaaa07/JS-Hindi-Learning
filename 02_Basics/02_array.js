const classic_Bike = ["bajaj platina", "Splender", "Yamaha RX100"];

const sport_bike = ["Yamaha MT15", "Yamaha R15", "Royal Enfield 350"];

// classic_Bike.push(sport_bike);

// console.log(classic_Bike);
// console.log(classic_Bike[3][1]);

// const allBikes = classic_Bike.concat(sport_bike);
const allBikes = [...classic_Bike, ...sport_bike]; // Speard operator

// console.log(allBikes);

const nestedArray = [
  1,
  2,
  3,
  4,
  [5, 6, 7, [8, 9, 10], 11, 12],
  14,
  13,
  [15, 16, [17, 18, [19, 20, 21], 22, 23], 21],
];

const allArrayInSingle = nestedArray.flat(3);

// console.log(allArrayInSingle);

// ++++++++++++++++++++++++ Array Static Methhods ++++++++++++++++++++

// console.log(Array.isArray("Shiva"));        // check the value is Array or not

// console.log(Array.from({ name: "Shiva" }));

let score1 = 100;
let score2 = 200;
let score3 = 300;
let score4 = 400;

console.log(Array.of(score1, score2, score3, score4));
