import { validate } from "uuid";
import Validation from "./validaton";
import MedicineManager from "./medicineManager";
import {
  expirationDateInput,
  manufacturerInput,
  nameInput,
  quantityInput,
  submitButton,
  typeInput,
  form,
} from "./app";

class Ui {
  static currentEditId = null;
  static displayAddModal(openAddModalButton, formModal) {
    submitButton.textContent = "Add";
    openAddModalButton.addEventListener("click", () => {
      formModal.classList.add("form__modal--visible");
    });
  }
  static closeAddModal(closeAddModalButton, formModal, form, feedBackMessage) {
    closeAddModalButton.addEventListener("click", () => {
      formModal.classList.remove("form__modal--visible");
      feedBackMessage.textContent = "";
      submitButton.textContent = "Add";
      Ui.currentEditId = null;
      form.reset();
    });
  }

  // Deleting
  static displayDeleteModal(id, name) {
    const deleteModal = document.querySelector(".delete-container");
    const deleteMessage = document.querySelector(".delete-message");
    const confirmDeleteButton = document.querySelector(
      ".delete-modal__confirm-button"
    );

    deleteMessage.textContent = `Do you want to delete task "${name}"?`;
    deleteModal.classList.add("display-delete-modal");
    confirmDeleteButton.addEventListener("click", () => {
      MedicineManager.deleteMedicine(id);
      deleteMessage.textContent = "";
      deleteModal.classList.remove("display-delete-modal");
    });
  }

  static hideDeleteModal(closeButton) {
    closeButton.addEventListener("click", () => {
      const deleteModal = document.querySelector(".delete-container");
      const deleteMessage = document.querySelector(".delete-message");
      deleteModal.classList.remove("display-delete-modal");
      deleteMessage.textContent = "";
    });
  }

  // Editing
  static displayEditModal() {
    const formModal = document.querySelector(".form__modal");
    formModal.classList.add("form__modal--visible");
  }

  static populateEditForm(id) {
    form.reset();
    submitButton.textContent = "Confirm edit";
    const medicineToEdit = MedicineManager.medicineCollection.find(
      (medicine) => medicine.id === id
    );
    nameInput.value = medicineToEdit.name;
    manufacturerInput.value = medicineToEdit.manufacturer;
    quantityInput.value = medicineToEdit.quantity;
    typeInput.value = medicineToEdit.type;
    expirationDateInput.value = medicineToEdit.expirationDate;
    Ui.currentEditId = id;
  }

  // Rendering
  static renderMedicine(filter = "all") {
    const medicineList = document.querySelector(".medicine__list");
    medicineList.innerHTML = "";
    const medicineCollection = JSON.parse(
      localStorage.getItem("medicine-collection")
    );
    const filteredCollection =
      filter === "all"
        ? medicineCollection
        : medicineCollection.filter((medicine) => medicine.type === filter);
    filteredCollection.forEach((medicine) => {
      //Creating elements
      const medicineContainer = document.createElement("li");
      //   containers
      const nameContainer = document.createElement("div");
      const manufacturerContainer = document.createElement("div");
      const quantityContainer = document.createElement("div");
      const typeContainer = document.createElement("div");
      const expirationDateContainer = document.createElement("div");
      const toolsContainer = document.createElement("div");
      //    Headers
      const nameHeader = document.createElement("h2");
      const manufacturerHeader = document.createElement("h2");
      const quantityHeader = document.createElement("h2");
      const typeHeader = document.createElement("h2");
      const expirationDateHeader = document.createElement("h2");
      //    Paragraphs
      const name = document.createElement("p");
      const manufacturer = document.createElement("p");
      const quantity = document.createElement("p");
      const type = document.createElement("p");
      const expirationDate = document.createElement("p");

      const editButton = document.createElement("button");
      const deleteButton = document.createElement("button");

      //Adding data
      nameHeader.textContent = "Name:";
      manufacturerHeader.textContent = "Manufacturer:";
      quantityHeader.textContent = "Quantity:";
      typeHeader.textContent = "Type:";
      expirationDateHeader.textContent = "Expiration Date:";

      name.textContent = medicine.name;
      manufacturer.textContent = medicine.manufacturer;
      quantity.textContent = medicine.quantity;
      type.textContent = medicine.type;
      expirationDate.textContent = medicine.expirationDate;

      editButton.textContent = "Edit";
      deleteButton.textContent = "Delete";

      //Appending
      medicineList.append(medicineContainer);
      medicineContainer.append(
        nameContainer,
        manufacturerContainer,
        quantityContainer,
        typeContainer,
        expirationDateContainer,
        toolsContainer
      );
      nameContainer.append(nameHeader, name);
      manufacturerContainer.append(manufacturerHeader, manufacturer);
      quantityContainer.append(quantityHeader, quantity);
      typeContainer.append(typeHeader, type);
      expirationDateContainer.append(expirationDateHeader, expirationDate);
      toolsContainer.append(editButton, deleteButton);

      const infoContainers = [
        nameContainer,
        manufacturerContainer,
        quantityContainer,
        typeContainer,
        expirationDateContainer,
      ];

      //Adding classes
      medicineContainer.classList.add("medicine");
      infoContainers.forEach((container) => {
        container.classList.add("medicine-info");
      });
      toolsContainer.classList.add("medicine__tools-container");

      // Adding eventlisteners
      deleteButton.addEventListener("click", () => {
        Ui.displayDeleteModal(medicine.id, medicine.name);
      });
      editButton.addEventListener("click", () => {
        Ui.displayEditModal();
        Ui.populateEditForm(medicine.id);
      });
    });
  }
}

export default Ui;
