const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// numbers.push(true)
// numbers.push("Shiva")
// numbers.pop()

numbers.unshift(100);

// console.log(numbers.length);
numbers.shift()

// console.log(numbers)


const myArray = [];

// console.log(myArray.shift())        // when array is empty then reutrn the undefined value

// console.log(myArray.pop())          // when array is empty then reutrn the undefined value

// +++++++++++++++++++++++++++ Array Method +++++++++++++++++++++++++

const arr1 = [1, 2, 3, 4, 5];
const arr2 = [6, 7, 8, 9, 10];

// const result = arr1 + arr2;      // it return the string 
const result = arr1.concat(arr2);   // adding both array in single array and return it

console.log(result);
console.log(typeof result);
