import { v4 as uuidv4 } from "uuid";

class Medicine {
  constructor(name, manufacturer, quantity, type, expirationDate) {
    (this.id = uuidv4()),
      (this.name = name),
      (this.manufacturer = manufacturer),
      (this.quantity = quantity),
      (this.type = type),
      (this.expirationDate = expirationDate);
  }
}

export default Medicine;
