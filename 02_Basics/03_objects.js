const mySym = Symbol("Mykey1");

const JsUser = {
  name: "Vibhav",
  "full name": "Vibhav Joshi",
  [mySym]: "myKey2",
  age: 23,
  location: "Pune",
  email: "vibhav@googel.com",
  isLoggedIn: false,
  lastLoggedInDays: ["Mon", "Wed"],
};

// console.log(JsUser.name);
// console.log(JsUser["full name"]);
// console.log(JsUser[mySym]);

// JsUser.email = "vibhav@joshi.com";
// Object.freeze(JsUser);
// JsUser.email = "vibhav@joshi1.com";
// console.log(JsUser);

JsUser.greetings = function () {
  console.log("Hello JS user");
};

JsUser.greetingsTwo = function () {
  console.log(`Hello JS User, ${this.name}`);
};

console.log(JsUser.greetings());
console.log(JsUser.greetingsTwo());
