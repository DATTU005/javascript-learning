let myDate = new Date();
// console.log("normal --->", myDate);
// console.log(
//   "toDateString() : Returns date as string value --->",
//   myDate.toDateString()
// );
// console.log(
//   "toTimeString() : Returns Time as string value --->",
//   myDate.toTimeString()
// );
// console.log(
//   "toLocaleDateString() : Converts a date to a string by using the current or specified locale --->",
//   myDate.toLocaleDateString()
// );
// console.log(
//   "toLocaleTimeString() : Converts a time to a string by using the current or specified locale --->",
//   myDate.toLocaleTimeString()
// );
// console.log(
//   "toISOString() : Returns a date as a string value in ISO format",
//   myDate.toISOString()
// );
// console.log(
//   "toString() : Returns a string represetation of the date",
//   myDate.toString()
// );

// let myNewDate = new Date(2024, 1, 28);
let myNewDate = new Date("01-14-2024");
// console.log(myNewDate.toLocaleDateString());

let myTimeStamp = Date.now();
// console.log(myTimeStamp);
console.log(myNewDate.getTime());
