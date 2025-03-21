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

<<<<<<< HEAD
// console.log(singleArray);
=======
let isArrays = Array.isArray(another_array);    // check the passed value is array or not and return Boolean value
>>>>>>> a4a6b87 (array)

// +++++++++++++++++++++++ Static Method of Array +++++++++++++++++++++++++

// let checkArray = Array.isArray("Shiva");
// let checkArray = Array.isArray("[]");
// let checkArray = Array.isArray([]);
let checkArray = Array.isArray(null); // checking the value is array or not

<<<<<<< HEAD
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
=======
// console.log(createdArray)



// +++++++++++++++++++++++++++++++++++ Self Learning +++++++++++++++++++++++++++++++

// isArray static method check the value passed is array or not 
// const anotherArray = Array.isArray(new Array("a", "b", "c", "d"));
const anotherArray = Array.isArray(null);

// console.log(Array.isArray(new Array(3)))

// console.log(anotherArray)

console.log(Array.from([1, 2, 3], (x) => x + x));
>>>>>>> a4a6b87 (array)
