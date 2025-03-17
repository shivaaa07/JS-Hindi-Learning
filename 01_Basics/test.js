// ++++++++++++++++++++++++++++++++++ Basic JavaScript coding questions +++++++++++++++++++++++++++++++++

// 1) Write a JavaScript function to calculate the sum of two numbers.

function sumOfTwoNumber(num1, num2) {
  return `The Sum of Two Number is : ${num1 + num2}`;
}

// console.log(sumOfTwoNumber(10, 23));

// Write a JavaScript program to find the maximum number in an array.

let numbers = [1, 22, 3, 4, 5, 6, 7, 8, 9, 10, 11];

function maxNumber(nums) {
  let maxValue = 0;
  nums.forEach((num) => {
    if (maxValue < num) {
      maxValue = num;
    }
  });
  return maxValue;
}

// using Math Libarary of JS

function maxNum(nums) {
  return Math.max(...nums);
}

// console.log("The Max number is :", maxNum(numbers))

// 3) Write a JavaScript function to check if a given string is a palindrome (reads the same forwards and backwards).

function isPalindrome(str) {
  return str === str.split("").reverse().join("");
}

// console.log(isPalindrome("shiva"))

// 4) Write a JavaScript program to reverse a given string.

function reverseString(str) {
  return str.split("").reverse().join("");
}

// console.log(reverseString("12345"))

// 5) Write a JavaScript function that takes an array of numbers and returns a new array with only the even numbers.

function evenNumbers(nums) {
  return nums.filter((num) => num % 2 == 0);
}

// console.log(evenNumbers(numbers))

// 6) Write a JavaScript program to calculate the factorial of a given number.

// 5! = 5*4*3*2*1;

let number = 6;

// Using For Loop
// function factorial(nums) {
//     let res = nums;
//     for (let i = 1; i < nums; i++) {
//         res *= nums - i
//     }
//     return res;
// }

// Using Recursive Function

function factorial(num) {
  if (num === 0 || num === 1) {
    return 1;
  } else {
    return num * factorial(num - 1);
  }
}

// console.log(`The Factorial of ${number} is : ${factorial(number)}`);

// 7) Write a function to find the missing number in array of consecutive integers

const missingNumbers = [2, 3, 4, 5, 6, 8, 9, 10];

function missingNumber(nums) {
  let res = [];
  for (let i = 0; i < nums.length + 1; i++) {
    res.push(nums[0] + i);
    // console.log(res)
  }
  return res;
}

console.log("Missing Consecutive NNumber is :", missingNumber(missingNumbers));
