let score = undefined;

let scoreInNumber = Number(score);

console.log(typeof(scoreInNumber));

console.log(scoreInNumber);

/*
    "33" => 33;
    "33Abc" => NaN
    true => 1; false => 0
    null => 0;
    undefined => NaN
*/

const isLoggedIn = undefined;

const booleanIsLoggedIn = Boolean(isLoggedIn)

console.log(typeof booleanIsLoggedIn)
console.log(booleanIsLoggedIn);

/*
    "Shiva" => true
    "" => false
    null => false
    undefined => false
    1 => true
    0 => false
*/

let str = true;

let valueInString = String(str)

console.log(typeof valueInString);
console.log(valueInString);

// All value converted in string

// ++++++++++++++++++++++++++++++++ Operation ++++++++++++++++++++++++

console.log(2 + 2);
console.log(2 - 2);
console.log(2 * 2);
console.log(2 / 2);
console.log(2 % 2);

console.log( "1" + 2 );
console.log( 1 + "2" );
console.log( "1" + 2 + 2 );
console.log( 1 + 2 + "2" );

let str1 = "Hello ";
let str2 = "World";
let str3 = str1 + str2;

console.log(str3)

console.log(+true)
console.log(+false)
console.log(+null)
console.log(+undefined)
console.log(+"")
console.log(+"Shiva")

let gameCount = 100;

let res = gameCount++;
let res2 = ++gameCount;
console.log(res)
console.log(res2)
