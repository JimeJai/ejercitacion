import { NextFunction, Request, Response } from "express";
import UsersService from "./users";
import { v4 as uuidv4 } from "uuid";

class AuthService {
  static register(data: { name: string; email: string; password: string }) {
    try {
      UsersService.create({ name: data.name, email: data.email });
    } catch (error) {
      throw error;
    }
  }

  static login(req: Request, res: Response, next: NextFunction) {
    try {
    } catch (error) {
      next(error);
    }
  }
}

export default AuthService;
