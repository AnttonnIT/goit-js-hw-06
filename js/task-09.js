"use strict";

const bodyEl = document.querySelector("body");
const btnEl = document.querySelector(".change-color");
const spanEl = document.querySelector(".color");

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const changeColor = () => {
  bodyEl.style.backgroundColor = getRandomHexColor();

  spanEl.textContent = bodyEl.style.backgroundColor;
};

btnEl.addEventListener("click", changeColor);
