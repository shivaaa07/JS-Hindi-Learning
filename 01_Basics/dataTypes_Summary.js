// Two Types of DataTypes in JS

// Primitive(call by value)

/*
call by value : how to store value in memory and how to use and pass to another variable
Ex. 
    let num1 = 10;
    let num2 = num1;        <- copy of num1 is pass 

    - String
    - Number
    - Boolean
    - null
    - undefined
    - symbol
    - BigInt
*/


const authorName = "Shiva";
const age = 26;
const isLoggedIn = false;
const outSiteTemp = null;
const authorEmail = undefined;

const id = Symbol(123);
const anotherId = Symbol(123);

// console.log(id === anotherId)


// Non-primitive(call by reference)

/*
    call by reference : reference of the value given in memory
    Ex.
        const myObj = {
            name: "Shiva",
            age: 28
        }
        const obj2 = myObj;     <- pass the reference of the myObj value into obj2

    Array, Objbect, function
*/

const myArray = [1, 2, 3, 4, 5];
const myObj = {
    name: "Shiva",
    age: 28
}
const myFun = function() {
    console.log("Hello World!")
} 

myFun()