/*
+++++++++++++++++++++ String Prototype Learn ++++++++++++++++++++++++++++
1) charAt()     - Not allow to take negative integer 
2) concat()     - adding or attched two or more string with nth number of parameters
3) at()         - allow to take negative integer that return the value from last position of the string
4) constructor  - when we can use new keyword then return the Object of String or when we can use without new keyword it return the value of string Primitive datatype 
5) includes()   - It's take 2 arguments first what word/letter search and second what position start searching
6) indexOf()    - It return the index of that subString value
7) lastIndexOf()- It return the last index of subString value
8) match()      - it take RegExp of string and return the array of all subString 
9) matchAll()
10) repeat()    - any word/sentence you can repeat then use repeat Method
11) replace()
12) replaceAll()
13) search()
14) slice()
15) split()
16) sub()
17) substr()
18) substring()
19) toString()
*/


const userName = "Shiva";
const repoCount = 50;

// console.log("My name is " + userName.toUpperCase() + " " + "and my git repoCount is " + repoCount + " value");
// String interpolation or template litteral

// console.log(`My name is ${userName.toUpperCase()} and my git repoCount is ${repoCount}`);

const gameName = new String("shivass");

// console.log("charAt method value :", gameName.charAt(null));       // Negative number are not accepted

// console.log("at method value :", userName.at(-1));

const score = String(23);
const age = 23;

// console.log("with new keyword :", typeof gameName)
// console.log("without new keyword :", typeof score)
// console.log("normal string defined :", typeof age)

// console.log(age);

const sym = Symbol("exmaple");

// console.log("".concat(sym));

// console.log(typeof String(sym));


const myMessage = "The quick brown fox jumps over the lazy dog."

// console.log(myMessage.includes("dog", 6));

// console.log(myMessage.length);


// console.log(myMessage.length)
// console.log(myMessage.indexOf(undefined))

// console.log(myMessage.match(/o/gi));

let mood = "Sad😢 "

// console.log(`I'm very ${mood.repeat(3.7)}`)

const paragraph = "I think Ruth's dog is cuter than your dog!";

console.log(paragraph.replace("Ruth's", "my"));
// Expected output: "I think my dog is cuter than your dog!"

const regex = /Dog/gi;
console.log(paragraph.replace(regex, "ferret"));
// Expected output: "I think Ruth's ferret is cuter than your dog!"


