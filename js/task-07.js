"use strict";
const inputEl = document.querySelector("#font-size-control");
const spanEl = document.querySelector("#text");

const changeFontSize = () => {
  spanEl.style.fontSize = inputEl.value / 3 + "px";
};

inputEl.addEventListener("input", changeFontSize);
