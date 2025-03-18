// CoOrdinated Universal Time(UTC)

let myDate = new Date();

// console.log(typeof myDate);
// console.log(myDate.toDateString());

// Date.now() static method return the milliseconds from the date of January 1 1970
const startTime = Date.now();
// setTimeout(() => {
//   let result = Date.now() - startTime;
//   console.log(result);
// }, 2000);

let myParsesDate = Date.parse("1997-01-05"); // accept parameters to create custom date

// console.log(myParsesDate.toString());

const myUTCDate = new Date(Date.UTC(97, 0, 5, 5, 30, 55)); // accept parameters to create custom date

const myCreatedDate = new Date(2025, 2, 18, 21, 16); // Date constrctor accept parameters to create custom date

// console.log(myUTCDate.toLocaleString());
console.log(myCreatedDate.toLocaleString());
console.log(myCreatedDate.toDateString());
console.log(myCreatedDate.toLocaleDateString());
console.log(myCreatedDate.getFullYear());
console.log(myCreatedDate.getDate());
