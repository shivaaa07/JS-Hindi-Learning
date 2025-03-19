const classic_biks = ["splender", "platina", "iSarmt", "HFDelex"];

const sport_bike = ["MT15", "R15", "ZX10R", "Z900"];

const bikes = ["RX100", "Plaser220"];

// classic_biks.push(sport_bike);

const allBikes = classic_biks.concat(sport_bike, bikes);

const allNewBikes = [...classic_biks, ...sport_bike, ...bikes];

// console.log(allBikes);
// console.log(allNewBikes);

const nestedArray = [
  1,
  2,
  3,
  [4, 5, 6],
  7,
  8,
  [9, 10, 11, [12, 13, 14], 15],
  16,
];

const singleArray = nestedArray.flat(2);

// console.log(singleArray);

// +++++++++++++++++++++++ Static Method of Array +++++++++++++++++++++++++

// let checkArray = Array.isArray("Shiva");
// let checkArray = Array.isArray("[]");
// let checkArray = Array.isArray([]);
let checkArray = Array.isArray(null); // checking the value is array or not

// console.log(checkArray);

let createdByFromMethod = Array.from(
  // Created new array
  [1, 2, 3, 4, 5, 6],
  (character) => character / 2
);
// let createdByFromMethod = Array.from("Shiva", (character) =>
//   character.toUpperCase()
// );

// console.log(createdByFromMethod);

// const elementsArray = Array.of(11, 2, 3, 4, 5, 6, 7);
const elementsArray = Array.of(7);
const constrctorArray = Array(7);

console.log(elementsArray.length);
console.log(constrctorArray.length);
