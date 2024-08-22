import UsersModel from "../models/users";
import { v4 as uuidv4 } from "uuid";

class UsersService {
  static create(data: { name: string; email: string }) {
    try {
      const usersDb = UsersModel.read();
      const id = uuidv4();
      usersDb.users.push({ name: data.name, email: data.email, id: id });
      UsersModel.write(usersDb);
      return id;
    } catch (error) {
      throw error;
    }
  }

  static read() {
    try {
      const db = UsersModel.read();
      return db;
    } catch (error) {
      throw error;
    }
  }
}

export default UsersService;
