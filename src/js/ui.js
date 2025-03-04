import { validate } from "uuid";
import Validation from "./validaton";

class Ui {
  static currentEditId = null;
  static displayAddModal(openAddModalButton, formModal) {
    openAddModalButton.addEventListener("click", () => {
      formModal.classList.add("form__modal--visible");
    });
  }
  static closeAddModal(closeAddModalButton, formModal, form, feedBackMessage) {
    closeAddModalButton.addEventListener("click", () => {
      formModal.classList.remove("form__modal--visible");
      feedBackMessage.textContent = "";
      Ui.currentEditId = null;
      form.reset();
    });
  }

  static renderMedicine() {
    const medicineList = document.querySelector(".medicine__list");
    medicineList.innerHTML = "";
    const medicineCollection = JSON.parse(
      localStorage.getItem("medicine-collection")
    );
    medicineCollection.forEach((medicine) => {
      console.log(medicine);
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
    });
  }
}

export default Ui;
