"use strict";
const form = document.querySelector(".login-form");

const formSubmit = (event) => {
  event.preventDefault();

  const formElements = event.currentTarget.elements;

  if (formElements.email.value === "" || formElements.password.value === "") {
    alert("Будь ласка, заповніть всі поля");
    return;
  }

  // const formData = new FormData(event.currentTarget);

  const mail = formElements.email.value;
  const password = formElements.password.value;

  const formData = {
    mail,
    password,
  };

  console.log(formData);

  form.reset();
};

form.addEventListener("submit", formSubmit);
