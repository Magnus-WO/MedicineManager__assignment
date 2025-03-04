class Validation {
  static validateForm(feedbackMessage) {
    feedbackMessage.textContent = "";
    const fieldsToValidate = [
      { name: "name-input", message: "please enter the name of the medicine" },
      {
        name: "manufacturer-input",
        message: "please enter the manufacturer of the medicine",
      },
      {
        name: "quantity-input",
        message: "please enter the medicine quantity",
      },
      {
        name: "form__medicine-type",
        message: "please select the type of the medicine",
      },
      {
        name: "expiration-input",
        message: "please enter when the medicine expires",
      },
    ];

    for (let field of fieldsToValidate) {
      const inputField = document.querySelector(`[id = ${field.name}]`);
      inputField.addEventListener("input", () => {
        inputField.classList.remove("form__invalid-input");
        feedbackMessage.textContent = "";
      });
      if (!inputField.value.trim()) {
        feedbackMessage.classList.add("form__invalid-input--message");
        feedbackMessage.textContent = field.message;
        inputField.classList.add("form__invalid-input");
        return false;
      }
    }
    return true;
  }
}

export default Validation;
