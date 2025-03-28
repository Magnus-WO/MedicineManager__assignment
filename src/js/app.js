import MedicineManager from "./medicineManager";
import Validation from "./validaton";
import Ui from "./ui";

// Fetching form elements
const formModal = document.querySelector(".form__modal");
export const form = document.querySelector(".form");
export const nameInput = document.querySelector(".name__input");
export const manufacturerInput = document.querySelector(".manufacturer__input");
export const quantityInput = document.querySelector(".quantity__input");
export const typeInput = document.querySelector(".type__input");
export const expirationDateInput = document.querySelector(
  ".expiration-date__input"
);
const feedbackMessage = document.querySelector(".form__feedback");

export const submitButton = document.querySelector(".form__button--submit");
const openAddModalButton = document.querySelector(".medicine__add-button");
const closeAddModalButton = document.querySelector(".form__button--close");
const cancelDeleteButton = document.querySelector(
  ".delete-modal__cancel-button"
);

const typeFilter = document.querySelector("#filter");

//Adding eventlisteners

document.addEventListener("DOMContentLoaded", () => {
  Ui.displayAddModal(openAddModalButton, formModal);
  Ui.closeAddModal(closeAddModalButton, formModal, form, feedbackMessage);
  Ui.hideDeleteModal(cancelDeleteButton);

  Ui.renderMedicine();
});

form.addEventListener("submit", (e) => {
  e.preventDefault();

  if (!Validation.validateForm(feedbackMessage)) {
    return;
  }
  if (!Ui.currentEditId) {
    MedicineManager.addMedicine(
      nameInput.value.trim(),
      manufacturerInput.value.trim(),
      quantityInput.value.trim(),
      typeInput.value,
      expirationDateInput.value.trim()
    );
  } else {
    MedicineManager.editMedicine(
      Ui.currentEditId,
      nameInput.value.trim(),
      manufacturerInput.value.trim(),
      quantityInput.value.trim(),
      typeInput.value,
      expirationDateInput.value.trim()
    );
    Ui.currentEditId = null;
    formModal.classList.remove("form__modal--visible");
    submitButton.textContent = "Add";
  }
  Ui.renderMedicine();
  form.reset();
});

typeFilter.addEventListener("change", (e) => {
  console.log(e.target.value);
  if (e.target.value === "all") {
    Ui.renderMedicine("all");
  } else if (e.target.value === "pills") {
    Ui.renderMedicine("pills");
  } else if (e.target.value === "liquid") {
    Ui.renderMedicine("liquid");
  }
});
