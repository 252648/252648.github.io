/*****************로그인*****/

const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const UserName = document.querySelector(".name");

const HIDDEN_CLASS = "hidden";
const USERNAME = "username";

function onLogin(event) {
  event.preventDefault();
  loginForm.classList.add(HIDDEN_CLASS);
  const username = loginInput.value;
  localStorage.setItem(USERNAME, username);
  UserName.innerText = `Hi, ${username}`;
  UserName.classList.remove(HIDDEN_CLASS);
}

loginForm.addEventListener("submit", onLogin);

const saveUsername = localStorage.getItem(USERNAME);

if (saveUsername === null) {
  loginForm.classList.remove(HIDDEN_CLASS);
  loginForm.addEventListener("submit", onLogin);
} else {
  UserName.innerText = `Hi, ${saveUsername}`;
  UserName.classList.remove(HIDDEN_CLASS);
}
