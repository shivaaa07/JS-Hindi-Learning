/*
+++++++++++++++++++++ String Prototype Learn ++++++++++++++++++++++++++++
1) charAt()     - Not allow to take negative integer 
2) concat()     - adding or attched two or more string with nth number of parameters
3) at()         - allow to take negative integer that return the value from last position of the string
4) constructor
5) includes()
6) indexOf()
7) lastIndexOf()
8) match()
9) matchAll()
10) repeat()
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

console.log(userName.concat(" Sahani", " How are You ?", " I'm fine", repoCount));
console.log(userName + " " + repoCount)

console.log(userName.concat(" ", repoCount));
