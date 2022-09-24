const container = document.getElementById("container");
const form = document.getElementById("form");
const userName = document.getElementById("user-name");
const userEmail = document.getElementById("user-email");
const userPass = document.getElementById("user-pass");
const userRePass = document.getElementById("user-repass");
const userData = document.getElementById("userdata");
const massage = document.getElementsByClassName("massage");

let users = [];

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const user = { name: userName.value.trim(), email: userEmail.value.trim() };
  users.push(user);

  users.map((item) => {
    userData.innerHTML += `Name:${item.name}<br>Email:${item.email}<br><br>`;
  });
  form.reset();
});
