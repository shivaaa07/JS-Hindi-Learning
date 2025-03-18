let userName = "Shiva"; // defined String on String Literal

let state = new String("Mumbai"); // definned String as a Object

let address = String("Hanuman Chawl");

// const { city } = req.body;      // true

// console.table([typeof userName, typeof state, typeof address]);

// +++++++++++++++++++++++++++++++ Method ++++++++++++++++++++++++

let msg = "Welcome";

// console.log(msg.charAt(-11)); // return the character of specified index if index is negative then return the empty string
// console.log(msg.at(-11)); // return the character of specified index if negative index then return the value end of the sentance
// console.log(msg.concat(" Learning the JS")); // add to string in single value and return the string
// console.log(msg.indexOf("t", 9));
// console.log(msg.lastIndexOf("e", -2));  // it return the index of specified character if character are  not exist then return -1 value

// console.log(msg.repeat()); // it return the copie of string and if count is not defined or zero it return the empty value

// console.log(msg.includes("L"));
// console.log(msg.replace("e", "z"));
// console.log(msg.replaceAll("e", "z"));

// console.log(msg.substring(-5));
// console.log(msg.slice(-5, -3));

console.log(msg.split(""));

/*
    String Methods in JavaScript
    1) charAt()
    2) at()
    3) Repeat()
    4) match()
    5) indexOf()
    6) concat()
    7) subString()
    8) slice()
    9) replace()    - Only First Match will be replace
    10) replaceAll() - Replcae All Match will be replace
    11) includes()  - check provided string or word are availble in that sentence
    12) split()
    13) toString()
*/
