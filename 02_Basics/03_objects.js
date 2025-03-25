// Singleton
// const singletonObject = Object.create();

const myObj =  new Object()
// console.log(singletonObject);
// console.log(myObj);

// Object Literals

const mySym = Symbol(123);

const jsUser = {
  name: "Shiva",
  age: 28,
  email: "shiva@gmail.com",
  "full Name": "Shivaa Sahani",
  isLoggedIn: false,
  [mySym]: "Jyoti"
};

// console.log(jsUser);
// console.log(jsUser[mySym]);

// Object.freeze(jsUser)   // after the freeze method Object are Immutable
jsUser.email = "shiva.sahani@googgle.com";

jsUser.greetng = function() {
  console.log("Hello JS User!");
}

jsUser.greetngTwo = function() {
  console.log(`Hello JS User!, ${this["full Name"]}`);
}

// console.log(jsUser);

// console.log(jsUser.greetng)

jsUser.greetngTwo()
