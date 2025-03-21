// Singleton
// constructor()

// Object Literals

const mySym = Symbol("123");

const jsUser = {
  name: "Shiva",
  "full name": "Shiva Sahani",
  age: 28,
  location: "Jaipur",
  email: "shivaa@google.com",
  isLoggedIn: false,
  [mySym]: "Hello World!",
};

// console.log(jsUser);
// console.log(jsUser["location"]);
// console.log(jsUser["full name"]);
// console.log(jsUser[mySym]);

// Object.freeze(jsUser); // freeze method cannot change the object value after the freezing and freeze is static method of object

jsUser["full name"] = "Shivkumar Sahani";

jsUser.greeting = function () {
  return `Hello JS user`;
};
jsUser.greetingTwo = function () {
  return `Hello JS user, ${this["full name"]}`;
};

// console.log(jsUser.greeting());
// console.log(jsUser.greetingTwo());

// const myObj = new Object();
// const myObj = new Object(null);
// const myObj = new Object(undefined);
const myObj = new Object(BigInt);

// myObj["name"] = "Shiva";

console.log(myObj);
