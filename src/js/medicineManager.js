import Medicine from "./medicine";

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

  static storeMedicine(medicineCollection) {
    localStorage.setItem(
      "medicine-collection",
      JSON.stringify(medicineCollection)
    );
  }
}

export default MedicineManager;
