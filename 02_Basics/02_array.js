const marvel_heros = ["thor", "ironman", "spiderman"];
const dc_heros = ["superman", "flash", "batman"];

// marvel_heros.push(dc_heros)

// console.log(marvel_heros)

const allHeros = marvel_heros.concat(dc_heros)  // adding element to end of the array and return the new array

// console.log(allHeros)

const allNewHeros = [...marvel_heros, ...dc_heros];     // add multiple array in single array

// console.log(allNewHeros)

const another_array = [1, 2, 3, 4, 5, [6, 7, 8], 9, 10, [9, 8, 7, [6, 5, [11, 12, 13], 4, 3], 2], 1];

// console.log(another_array.flat(3))      // flat method return new array with all sub-element concatnated in single array

let isArrays = Array.isArray(another_array);    // check the passed value is array or not

// console.log(isArrays)

let createdArray = Array.from("Shiva");

console.log(createdArray)
