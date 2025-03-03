// DataType Conversion
// +++++++++++++++++++++++ Number +++++++++++++++

let score = "shiva";

let scoreInNumber = Number(score);

// console.log(scoreInNumber)
// console.log(typeof(scoreInNumber));

/*
    1) "" => 0
    2) "Shiva" => NaN
    3) true => 1; false => 0
    4) "33" => 33
    5) null => 0
    6) undefined => NaN
*/

// +++++++++++++++++++++++ Boolean +++++++++++++++

let isLoggedIn = undefined;

let booleanIsLoggedIn = Boolean(isLoggedIn);

// console.log(booleanIsLoggedIn);
// console.log(typeof booleanIsLoggedIn);

/*
    1) "" => false
    2) "Shiva" => true
    3) 1 => true
    4) 0 => false
    5) null => false; undefined => false
*/

// +++++++++++++++++++++++ String +++++++++++++++

let str =null;

let valueInString = String(str);

// console.log(valueInString)
// console.log(typeof valueInString)

// +++++++++++++++++++++++ Operation ++++++++++++++++++++

// console.log(2 + 2);
// console.log(2 - 2);
// console.log(2 * 2);
// console.log(2 ** 3);
// console.log(2 / 3);
// console.log(2 % 3);

// console.log("1" + 2);
// console.log(1 + "2");
// console.log("1" + 2 + 2);
// console.log(1 + 2 + "2");

// console.log(+true)
// console.log(+false)
// console.log(+null)
// console.log(+undefined)

let gameCounter = 100;
// let result = gameCounter++;     // Postfix Operation
let result = ++gameCounter;     // prefix Operation
console.log(result)