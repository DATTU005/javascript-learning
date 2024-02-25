const accountId = 123456;
let accountEmail = "v.j@gmail.com";
let accountPassword = "123456";
accountCity = "Pune";
let accountState;

// accountId = 123; //not allowed

if (accountPassword === "123456") {
  let email = "vj@gmail.com";
  console.log(email); // logs the vj@gmail.com
}

console.log(email); // ReferenceError: email is not defined

// accountEmail = "vj@gmail.com";
// accountPassword = "15486";
// accountCity = "Mumbai";

// console.table({
//   accountId, // ⁡⁣⁣⁢logs the account⁡ id as it is declared.
//   accountEmail, // ⁡⁣⁣⁢logs the account⁡ email as it is declared.
//   accountPassword, // ⁡⁣⁣⁢logs the account⁡ password as it is declared.
//   accountCity, // ⁡⁣⁣⁢logs the account city⁡ as it is declared.
//   accountState, // ⁡⁣⁣⁢logs the account⁡ state as ⁡⁢⁣⁢𝘂𝗻𝗱𝗲𝗳𝗶𝗻𝗲𝗱⁡ because the value is ⁡⁢⁢⁢𝗻𝗼𝘁 𝗮𝘀𝘀𝗶𝗴𝗻𝗲𝗱⁡.
// });
