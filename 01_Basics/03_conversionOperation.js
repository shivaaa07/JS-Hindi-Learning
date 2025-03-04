// ++++++++++++++++++++ Conversion ++++++++++++++++++++
let score = null;

// let { score } = req.body;

let scoreInNumber = Number(score);

// if (scoreInNumber != NaN) {
//     return res.send("Please Enter Valid Number.")
// }

// console.log(scoreInNumber);
// console.log(typeof scoreInNumber);

/*
    "33abc" => NaN
    "33" => Number(33)
    "" => 0
    undefined => NaN
    null => 0
    true => 1; false => 0
*/

// Boolean
let isLoggedIn = undefined;

let BooleanIsLoggedIn = Boolean(isLoggedIn);

// console.log(BooleanIsLoggedIn);
// console.log(typeof BooleanIsLoggedIn);

/*
    "" => false; "Shiva" => true
    null => false: undefined => false
    1 => true; 0 => false
*/

// ++++++++++++++++++++++++++++++++++++++++ Operation ++++++++++++++++++++++++++++++

// console.log(2 + 2);
// console.log(2 - 2);
// console.log(2 * 2);
// console.log(2 ** 2);
// console.log(2 / 2);
// console.log(2 % 2);

console.log("1" + 2);
console.log(1 + "2");
console.log("1" + 2 + 2);
console.log(1 + 2 + "2");