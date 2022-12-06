"use strict";
// Task 1;
const listByIdEl = document.querySelector("#categories");

const itemsOfCategories = listByIdEl.children;

console.log(`Number of categories: ${itemsOfCategories.length}`);
// Task 2;

const categoriesTittlesAndElements = ([...array]) => {
  for (const arr of array) {
    console.log(`Category: ${arr.children[0].textContent}`);
    console.log(`Elements: ${arr.children[1].children.length}`);
  }
};
categoriesTittlesAndElements(itemsOfCategories);

// Або через forEach;

// const listItemsByClassEl = document.querySelectorAll(".item");

// listItemsByClassEl.forEach((el) => {
//   console.log(`Category: ${el.children[0].textContent}`),
//     console.log(`Elements: ${el.children[1].children.length}`);
// });
