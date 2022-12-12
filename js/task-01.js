"use strict";

const listByIdEl = document.querySelector("#categories");

const itemsOfCategories = listByIdEl.children;

console.log(`Number of categories: ${itemsOfCategories.length}`);

const categoriesTittlesAndElements = ([...array]) => {
  array.forEach((el) => {
    console.log(`Category: ${el.children[0].textContent}`);
    console.log(`Elements: ${el.children[1].children.length}`);
  });
};
categoriesTittlesAndElements(itemsOfCategories);
