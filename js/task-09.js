"use strict";

const bodyEl = document.querySelector("body");
const btnEl = document.querySelector(".change-color");
const spanEl = document.querySelector(".color");

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
};

const changeColor = () => {
  const color = getRandomHexColor();

  bodyEl.style.backgroundColor = color;

  spanEl.textContent = color;
};

btnEl.addEventListener("click", changeColor);
