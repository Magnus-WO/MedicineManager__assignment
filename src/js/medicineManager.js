import { nameInput } from "./app";
import Medicine from "./medicine";
import Ui from "./ui";

class MedicineManager {
  static medicineCollection =
    JSON.parse(localStorage.getItem("medicine-collection")) || [];

  static addMedicine(name, manufacturer, quantity, type, expirationDate) {
    const latestCollection = this.medicineCollection;

    let medicine = new Medicine(
      name,
      manufacturer,
      quantity,
      type,
      expirationDate
    );
    latestCollection.push(medicine);
    this.storeMedicine(latestCollection);
    MedicineManager.medicineCollection = latestCollection;
  }
  static deleteMedicine(id) {
    const latestCollection = this.medicineCollection;

    MedicineManager.medicineCollection = latestCollection.filter((medicine) => {
      return medicine.id != id;
    });
    MedicineManager.storeMedicine(MedicineManager.medicineCollection);
    Ui.renderMedicine();
  }

  static editMedicine(id, name, manufacturer, quantity, type, expirationDate) {
    console.log("message from edit medicine");

    const latestCollection = this.medicineCollection;
    const medicineIndex = latestCollection.findIndex(
      (medicine) => medicine.id === id
    );
    if (medicineIndex !== -1) {
      latestCollection[medicineIndex] = {
        name,
        manufacturer,
        quantity,
        type,
        expirationDate,
      };
    }
    MedicineManager.storeMedicine(latestCollection);
    MedicineManager.medicineCollection = latestCollection;
  }

  static storeMedicine(medicineCollection) {
    localStorage.setItem(
      "medicine-collection",
      JSON.stringify(medicineCollection)
    );
  }
}

export default MedicineManager;
