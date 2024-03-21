//⁡⁢⁣⁢𝗳𝗶𝗹𝘁𝗲𝗿𝘀⁡

// // const coding = ["js", "java", "python", "cpp", "c#"];

// // const cding1 = coding.forEach((item) => {
// //   console.log(item);
// // });

// // console.log(cding1);

const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const num = myNums.filter((n) => n > 5);
console.log("num", num);

// const filteredNum = myNums.filter((num) => num > 5);

// // console.log(filteredNum);

// let newNums = [];
// myNums.forEach((num) => {
//   if (num > 5) {
//     newNums.push(num);
//   }
// });
// // console.log(newNums);

// const books = [
//   { title: "Book One", genre: "Fiction", publish: 1981, edition: 2004 },
//   { title: "Book Two", genre: "Non-Fiction", publish: 1992, edition: 2008 },
//   { title: "Book Three", genre: "History", publish: 1999, edition: 2007 },
//   { title: "Book Four", genre: "Non-Fiction", publish: 1989, edition: 2010 },
//   { title: "Book Five", genre: "Science", publish: 2009, edition: 2014 },
//   { title: "Book Six", genre: "Fiction", publish: 1987, edition: 2010 },
//   { title: "Book Seven", genre: "History", publish: 1986, edition: 1996 },
//   { title: "Book Eight", genre: "Science", publish: 2011, edition: 2016 },
//   { title: "Book Nine", genre: "Non-Fiction", publish: 1981, edition: 1989 },
// ];

// let myBooks = books.filter((book) => book.genre === "Fiction");
// // myBooks = books.filter((book) => book.publish >= 1981 && book.edition >= 2008);
// // console.log(myBooks);

//⁡⁢⁣⁢𝗺𝗮𝗽𝘀⁡

// let nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// // let muNumbers = nums.map((numb) => numb + 10);
// // console.log(muNumbers);

// let myNum = [];
// nums.forEach((n) => {
//   myNum.push(n + 10);
// });

// console.log(myNum);

// let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// let numberChaining = numbers
//   .map((n) => n * 10)
//   .map((n) => n + 1)
//   .filter((n) => n >= 50);

// console.log(numberChaining);

// ⁡⁢⁣⁢𝗿𝗲𝗱𝘂𝗰𝗲⁡
// let myNum = numbers.reduce((acc, curr) => {
//   console.log(`acc : ${acc} and curr : ${curr}`);
//   return acc + curr;
// }, 0);
// console.log(myNum);

const shoppingCart = [
  {
    itemName: "js course",
    price: 2999,
  },
  {
    itemName: "py course",
    price: 999,
  },
  {
    itemName: "mob dev course",
    price: 5999,
  },
  {
    itemName: "DS course",
    price: 12999,
  },
];

let newCart = shoppingCart.reduce((acc, item) => acc + item.price, 0);

// console.log(newCart);
