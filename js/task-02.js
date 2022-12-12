"use strict";

const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const listByIdEl = document.querySelector("#ingredients");

const newListItemArray = ingredients.map((el) => {
  const newListItemEl = document.createElement("li");
  newListItemEl.textContent = el;
  newListItemEl.classList.add("item");
  return newListItemEl;
});

listByIdEl.append(...newListItemArray);
