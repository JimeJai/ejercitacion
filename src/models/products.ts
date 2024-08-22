import { writeFileSync, readFileSync } from "jsonfile";

class ProductsModel {
  static write(data) {
    try {
      writeFileSync("../database/products.json", data);
      return true;
    } catch (error) {
      throw error;
    }
  }

  static read() {
    try {
      const db = readFileSync("../database/products.json");
      return db;
    } catch (error) {
      throw error;
    }
  }
}

export default ProductsModel;
