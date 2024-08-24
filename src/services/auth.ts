import { NextFunction, Request, Response } from "express";
import UsersService from "./users";
import { v4 as uuidv4 } from "uuid";
import AuthModel from "../models/auth";
import createHash from "../utils/create-hash";

class AuthService {
  static async register(data: {
    name: string;
    email: string;
    password: string;
  }) {
    try {
      const userId = await UsersService.create({
        name: data.name,
        email: data.email,
      });
      const authDb = await AuthModel.read();
      const token = createHash(uuidv4());
      authDb.auth.push({
        id: uuidv4(),
        userId: userId,
        password: createHash(data.password),
        token: token,
      });
      AuthModel.write(authDb);
      return token;
    } catch (error) {
      throw error;
    }
  }

  static async login(req: Request, res: Response, next: NextFunction) {
    try {
    } catch (error) {
      next(error);
    }
  }
}

export default AuthService;
