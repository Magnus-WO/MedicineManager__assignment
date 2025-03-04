import MedicineManager from "./medicineManager";
import Validation from "./validaton";
// Fetching form elements
const form = document.querySelector(".form");
const nameInput = document.querySelector(".name__input");
const manufacturerInput = document.querySelector(".manufacturer__input");
const quantityInput = document.querySelector(".quantity__input");
const typeInput = document.querySelector(".type__input");
const expirationDateInput = document.querySelector(".expiration-date__input");
const feedbackMessage = document.querySelector(".form__feedback");
const submitButton = document.querySelector(".form__button--add");

//Adding eventlisteners

document.addEventListener("DOMContentLoaded", () => {});

form.addEventListener("submit", (e) => {
  e.preventDefault();
  if (!Validation.validateForm(feedbackMessage)) {
    console.log("returning true");
    return;
  }

  MedicineManager.addMedicine(
    nameInput.value.trim(),
    manufacturerInput.value.trim(),
    quantityInput.value.trim(),
    typeInput.value,
    expirationDateInput.value.trim()
  );
});
