// DataType conversion


let score = "33abc";

// const { score } = req.body;          // here not mention which type of data are collected. 

let scoreInNumber = Number(score)
// console.log(scoreInNumber);
// console.log(typeof scoreInNumber);

/*
"33" => 33
"33abc" => NaN
true => 1
false => 0
null => 0
undefined => NaN
*/

// Boolean conversion

let isLoggedIn = "Shiva";

let booleanIsLoggedIn = Boolean(isLoggedIn)

// console.log(booleanIsLoggedIn)
// console.log(typeof booleanIsLoggedIn)

/*
 1 => true; 0 => false
"" => flase; 
"Shiva" => true
*/

// String Conversion

let value = undefined;

let valueInString = String(value)

console.log(valueInString);
console.log(typeof(valueInString));



