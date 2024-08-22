import { writeFileSync, readFileSync } from "jsonfile";

class AuthModel {
  static write(data) {
    try {
      writeFileSync("../database/auth.json", data);
      return true;
    } catch (error) {
      throw error;
    }
  }

  static read() {
    try {
      const db = readFileSync("../database/auth.json");
      return db;
    } catch (error) {
      throw error;
    }
  }
}

export default AuthModel;
