const BTN = document.querySelector("button");
const Text = document.querySelector("h2");

function click() {
  Text.innerText = "123";
}

BTN.addEventListener("click", click);
