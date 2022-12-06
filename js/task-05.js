"use strict";
const inputEl = document.querySelector("#name-input");
const spanEl = document.querySelector("#name-output");

const spanChange = (event) => {
  spanEl.textContent = event.currentTarget.value;
  if (!event.currentTarget.value) {
    spanEl.textContent = "Anonymous";
  }
};
inputEl.addEventListener("input", spanChange);
