const button = document.querySelector("button");
const body = document.querySelector("body");
const color = ["blue", "green", "violet"];

body.style.backgroundColor = "orange";

button.addEventListener("click", changeColor);

function changeColor() {
  const colorIndex = parseInt(Math.random() * color.length);
  body.style.backgroundColor = color[colorIndex];
}
