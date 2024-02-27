const arr = [0, 1, 2, 3, 4];
const myHeros = ["Batman", "Flash", "Superman"];

// console.log(arr[1], myHeros[1]);

const myArray = new Array(0, 1, 2, 3, 4);

// console.log(myArray.push(5));
// console.log(myArray.pop());
// console.log(myArray.unshift(10));
// console.log(myArray.shift());
// console.log(myArray.includes(3));
// console.log(myArray.indexOf(2));

// const newArray = myArray.join("-");
console.log("A", myArray);

const myn1 = myArray.slice(1, -4);
console.log("B", myn1);
console.log(myArray);

const myn2 = myArray.splice(1, 3);
console.log(myn2);
console.log("C", myArray);
