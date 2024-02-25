// Primitive data types:
// 7 types : String, Number, Boolean, null, undefined, Symbol, BigInt

const score = 100;
const temp = 100.3;

const isLoggedIn = false;
const outsideTemp = null;
let userEmail; //undefined

//Symbols are mostly used when you want to declare some unique variables like iD

//the below two symbols will give different values so ther are not equal or similar.
const id = Symbol("123");
const anotherId = Symbol("123");

const bigNumber = 14656546654324n;
console.table({
  score,
  temp,
  isLoggedIn,
  outsideTemp,
  userEmail,
  id,
  anotherId,
  bigNumber,
});
// ┌─────────────┬─────────────────┐
// │   (index)   │     Values      │
// ├─────────────┼─────────────────┤
// │    score    │       100       │
// │ isLoggedIn  │      false      │
// │ outsideTemp │      null       │
// │  userEmail  │    undefined    │
// │     id      │   Symbol(123)   │
// │  anotherId  │   Symbol(123)   │
// │  bigNumber  │ 14656546654324n │

console.table(
  Object.entries({
    score: 100,
    temp: 100.3,
    isLoggedIn: false,
    outsideTemp: null,
    userEmail,
    id: Symbol("123"),
    anotherId: Symbol("123"),
    bigNumber: 14656546654324n,
  }).map(([key, value]) => ({ [key]: typeof value }))
);
// output and typeof operator
// ┌─────────┬──────────┬──────────┬────────────┬─────────────┬─────────────┬──────────┬───────────┬───────────┐
// │ (index) │  score   │   temp   │ isLoggedIn │ outsideTemp │  userEmail  │    id    │ anotherId │ bigNumber │
// ├─────────┼──────────┼──────────┼────────────┼─────────────┼─────────────┼──────────┼───────────┼───────────┤
// │    0    │ 'number' │          │            │             │             │          │           │           │
// │    1    │          │ 'number' │            │             │             │          │           │           │
// │    2    │          │          │ 'boolean'  │             │             │          │           │           │
// │    3    │          │          │            │  'object'   │             │          │           │           │
// │    4    │          │          │            │             │ 'undefined' │          │           │           │
// │    5    │          │          │            │             │             │ 'symbol' │           │           │
// │    6    │          │          │            │             │             │          │ 'symbol'  │           │
// │    7    │          │          │            │             │             │          │           │ 'bigint'  │
// └─────────┴──────────┴──────────┴────────────┴─────────────┴─────────────┴──────────┴───────────┴───────────┘

// Reference Type (Non-primitive):

// Arrays, Object, Functions

let heros = ["Shaktiman", "krishh", "hero"];

let myObj = {
  name: "Vibhav",
  age: 23,
};

let myFunction = function hello() {
  console.log("Hello world!");
};

console.table(
  Object.entries({
    heros: ["Shaktiman", "krishh", "hero"],
    myObj: {
      name: "Vibhav",
      age: 23,
    },
    myFunction: function hello() {
      console.log("Hello world!");
    },
  }).map(([key, value]) => ({ [key]: typeof value }))
);

// ┌─────────┬──────────┬──────────┬────────────┐
// │ (index) │  heros   │  myObj   │ myFunction │
// ├─────────┼──────────┼──────────┼────────────┤
// │    0    │ 'object' │          │            │
// │    1    │          │ 'object' │            │
// │    2    │          │          │ 'function' │
// └─────────┴──────────┴──────────┴────────────┘
