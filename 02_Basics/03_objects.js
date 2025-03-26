// Singleton
// Object.create()

// Object Literals

const mySym = Symbol("Jyoti");

const myObj = {
  firstName: "Shiva",
  lastName: "Sahani",
  "Full Name": "Shivkumar Sahani",
  [mySym]: "Jyoti Das",
  age: 18,
  email: "shiva@google.com",
  city: "Jaipur",
  isLoggedIn: false,
};

console.log(myObj[mySym]);
console.log(myObj);
// console.log(myObj["Full Name"]);
// console.log(myObj.city);

myObj["email"] = "shiva@chatgpt.com";

// Object.freeze(myObj);     // After the freeze method Object can not be change

myObj.email = "shiva@microsoft.com";

// console.log(myObj);

myObj["greeting"] = function () {
  console.log("Hello JavaScript User🙌");
};

myObj.greetingTwo = function () {
  console.log(`Hello JavaScript User🙌 ${this["Full Name"]}`);
};

// myObj.greeting()
// myObj["greeting"]();
// myObj.greetingTwo();
