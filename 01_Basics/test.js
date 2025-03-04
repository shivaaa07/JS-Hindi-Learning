// ++++++++++++++++++++++++++++++++++ Basic JavaScript coding questions +++++++++++++++++++++++++++++++++

// 1) Write a JavaScript function to calculate the sum of two numbers.

function sumOfTwoNumber(num1, num2) {
    return `The Sum of Two Number is : ${num1 + num2}`
}

// console.log(sumOfTwoNumber(10, 23));

// Write a JavaScript program to find the maximum number in an array. 

let numbers = [1, 22, 3, 4, 5, 6, 7, 8, 9, 10, 11];

function maxNumber(nums) {
    let maxValue = 0;
    nums.forEach(num => {
        if (maxValue < num) {
            maxValue = num;
        }
    });
    return maxValue;
}

// using Math Libarary of JS

function maxNum(nums) {
    return Math.max(...nums)
}

// console.log("The Max number is :", maxNum(numbers))

// 3) Write a JavaScript function to check if a given string is a palindrome (reads the same forwards and backwards).

function isPalindrome(str) {
    return str === str.split('').reverse().join('')
}

// console.log(isPalindrome("shiva"))

// 4) Write a JavaScript program to reverse a given string.

function reverseString(str) {
    return str.split('').reverse().join('');
}

// console.log(reverseString("12345"))

// 5) Write a JavaScript function that takes an array of numbers and returns a new array with only the even numbers.

function evenNumbers(nums) {
    return nums.filter(num => num % 2 == 0 )
}

// console.log(evenNumbers(numbers))

// 6) Write a JavaScript program to calculate the factorial of a given number. 

// 5! = 5*4*3*2*1

function factorial(terms) {
    let res = 1;
    let value
    while(res < terms){
        terms *= (terms - res)
        res++
    }
    return terms
}

// console.log('The Factorial of 5 is :', factorial(5))