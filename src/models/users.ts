import { writeFileSync, readFileSync } from "jsonfile";

class UsersModel {
  static write(data) {
    try {
      writeFileSync("../database/users.json", data);
      return true;
    } catch (error) {
      throw error;
    }
  }

  static read() {
    try {
      const db = readFileSync("../database/users.json");
      return db;
    } catch (error) {
      throw error;
    }
  }
}

export default UsersModel;