// Exemple réutilisable

// @ts-nocheck
const emailInput = document.getElementById("email");
const button = document.getElementById("submit");
const messageError = document.getElementById("error-mail");
const container = document.querySelector(".container");
const validEmail = document.querySelector(".valid-form");

const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const validateEmail = (email) => {
  return re.test(String(email).toLowerCase());
};
let emaile = "";

button.addEventListener("click", () => {
  emaile = emailInput.value;
  console.log(" la valeur de email value est : " + emaile);

  if (!validateEmail(emaile)) {
    messageError.textContent = "Valid email required";
    emailInput.classList.add("active");
    console.log(messageError);
  } else {
    container.classList.add("remove");
    validEmail.classList.add("add");
  }
  email.value = "";
});
