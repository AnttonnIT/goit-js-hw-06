"use strict";

const btnDecrementEl = document.querySelector(
  'button[data-action="decrement"]'
);
const btnIncrementEl = document.querySelector(
  'button[data-action="increment"]'
);
const spanEl = document.querySelector("#value");

let counterValue = 0;

const decrementValue = () => {
  counterValue -= 1;
  spanEl.textContent = counterValue;
};
const incrementValue = () => {
  counterValue += 1;
  spanEl.textContent = counterValue;
};

btnDecrementEl.addEventListener("click", decrementValue);
btnIncrementEl.addEventListener("click", incrementValue);
