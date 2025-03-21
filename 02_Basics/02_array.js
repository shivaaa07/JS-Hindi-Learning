const sportBike = ["R15", "MT15", "Z900", "ZX10R"];

const classicBike = ["Royal Enfield 350", "Yamaha RX100", "Splender", "Bajaj Platina"];

// sportBike.push(classicBike);

const allBikes = sportBike.concat(classicBike); 

const allBikeCollections = [...sportBike, ...classicBike];    // Speard Operator

// console.log(sportBike);
// console.log(allBikes);
// console.log(allBikeCollections);

// nested Array
const nestedArray = [1, 2, 3, [4, 5, 6, [7, 9, 8], 10, 11], 12, [13, 14, [115, 16, 117], 18, 19], 20];

const singleArray = nestedArray.flat(2);

// console.log(nestedArray);
// console.log(singleArray);

// +++++++++++++++++++++ Static Methods ++++++++++++++++++++++

// console.log(Array.isArray("Shiva"));    // check given value is array or not

const createdArrayFromMethod = Array.from([1, 2, 3, 4], nums => nums*0.5);    

// console.log(createdArrayFromMethod);

const createdArrayWithOfMethod = Array.of("Shiva", "Sahani", "Azim");

console.log(createdArrayWithOfMethod)