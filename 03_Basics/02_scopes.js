// var c = 400;

if (true) {
  let a = 10;
  const b = 200;
  var c = 30;
  // console.log("INNER :", a);
}

// console.log(a);
// console.log(b);
// console.log(c);

function one() {
  const firstName = "Shiva";
  function two() {
    const lastName = " Sahani";
    console.log(firstName + lastName);
  }
//   console.log(lastName);
  two();
}
// console.log(firstName);

// one();

if (true) {
    let userName = "Shiva";
    if (userName === "Shiva") {
        let website = " YouTube";
        console.log(userName + website); 
    }
    // console.log(website);
}

// console.log(userName);

// ++++++++++++++++++++++++++++ Hosting ++++++++++++++++++++++++++

console.log(addOne(5));

function addOne(number) {
    return number + 1;
}

// Normal Function
// console.log(addTwo(5));

const addTwo = function(num) {
    return num + 2;
}

// Arrow function
const addThree = (number) => {
    return number + 3;
}

console.log(addThree(5));
