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

const newListItemArray = [];

ingredients.forEach((el) => {
  const newListItemEl = document.createElement("li");
  newListItemEl.textContent = el;
  newListItemEl.classList.add("item");
  newListItemArray.push(newListItemEl);
});

listByIdEl.append(...newListItemArray);
