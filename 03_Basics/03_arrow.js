const user = {
  username: "Vibhav",
  email: "veebhavjoshi1@gmail.com",
  welcomeMessage: function () {
    console.log(`${this.username}, welcome to the store!`);
  },
};

// user.welcomeMessage();
// user.username = "Soham";
// user.welcomeMessage();

// console.log(this);

function one() {
  let username = "Vibhav";
  console.log(this.username);
}

one();
