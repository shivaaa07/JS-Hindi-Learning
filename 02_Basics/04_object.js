// Singleton Object

// const myObj = new Object();

const person = {
    isHuman: false,
    printIntroduction: function() {
        return `My Name is ${this.name} and I'm a human ${this.isHuman}.`
    }
};

const userOne = Object.create(person);

userOne.name = "Shiva Sahani";
userOne.isHuman = true;

// console.log(userOne.printIntroduction());

const userTwo = Object.create(person, {name: {value: "Jyoti Das"}, isHuman: {value :true}});

console.log(userTwo.printIntroduction());