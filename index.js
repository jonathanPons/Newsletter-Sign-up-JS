// Exemple réutilisable

// @ts-nocheck
const emailInput = document.getElementById("email");
const button = document.getElementById("submit");
const messageError = document.getElementById("error-mail");
const container = document.querySelector(".container");
const validEmail = document.querySelector(".valid-form");
const retourEmail = document.querySelector(".dismiss");
const emailInValidate = document.querySelector(".send-email");

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
    emailInValidate.textContent = emaile;
  }
  emailInput.value = "";
});

retourEmail.addEventListener("click", () => {
  console.log("dismiss ok");
  container.classList.remove("remove");
  validEmail.classList.remove("add");
});
