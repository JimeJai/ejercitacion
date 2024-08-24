import UsersModel from "../models/users";
import { v4 as uuidv4 } from "uuid";

class UsersService {
  static async create(data: { name: string; email: string }) {
    try {
      const usersDb = await UsersModel.read();
      const id = uuidv4();
      usersDb.users.push({ name: data.name, email: data.email, id: id });
      UsersModel.write(usersDb); // chequear si await o no
      return id;
    } catch (error) {
      throw error;
    }
  }

  static async read() {
    try {
      const db = await UsersModel.read();
      return db;
    } catch (error) {
      throw error;
    }
  }
}

export default UsersService;
