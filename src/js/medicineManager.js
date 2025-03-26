import Medicine from "./medicine";
import Ui from "./ui";

class MedicineManager {
  static medicineCollection =
    JSON.parse(localStorage.getItem("medicine-collection")) || [];

  static addMedicine(name, manufacturer, quantity, type, expirationDate) {
    const latestCollection =
      JSON.parse(localStorage.getItem("medicine-collection")) || [];

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
    const latestCollection = JSON.parse(
      localStorage.getItem("medicine-collection")
    );
    MedicineManager.medicineCollection = latestCollection.filter((medicine) => {
      return medicine.id != id;
    });
    MedicineManager.storeMedicine(MedicineManager.medicineCollection);
    Ui.renderMedicine();
  }

  static storeMedicine(medicineCollection) {
    localStorage.setItem(
      "medicine-collection",
      JSON.stringify(medicineCollection)
    );
  }
}

export default MedicineManager;
