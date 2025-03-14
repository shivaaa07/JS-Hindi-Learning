// Coordinated Universal Time (UTC) - Starting Date January 1, 1970

const myDate = new Date();

console.log(myDate);
console.log(myDate.toDateString());
console.log(myDate.toISOString()); // it return some as default value like this console.log(myDate)
console.log(myDate.toJSON()); // return some as toISOString method result

// console.log(myDate.toLocaleDateString());
console.log(
  myDate.toLocaleString("default", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    dayPeriod: "long",
  })
);
console.log(myDate.toLocaleTimeString());
console.log(myDate.toLocaleString());

const myCreatedDate = new Date("2025-03-30");

// console.log(myCreatedDate.toString());
console.log(myCreatedDate.toLocaleString());
console.log(myCreatedDate.getFullYear());
console.log(myCreatedDate.getDate());
console.log(myCreatedDate.getDay());
