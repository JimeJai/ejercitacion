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

  static async login(data: { email; password }) {
    try {
      const user = await UsersService.getByEmail(data.email);
      const authDb = await AuthModel.read()
      const userAuth = authDb.auth.find((auth) => auth.userId == user.id)

      if (userAuth.password != createHash(data.password)) {
        const error = new Error("Contraseña incorrecta");
        error["statusCode"] = 400

        throw error
      }

      const token = createHash(uuidv4());
      userAuth.token = token

      await AuthModel.write(authDb)

      return userAuth.token;
    } catch (error) {
      throw error;
    }
  }

  static async logout(token) {
    try {
      const authDb = await AuthModel.read()
      const auth = authDb.auth.find((auth) => auth.token == token)

      if (!auth) {
        const error = new Error("token no encontrado");
        error["statusCode"] = 404

        throw error
      }

      auth.token = null

      await AuthModel.write(authDb)      
    } catch (error) {
      throw error;
    }
  }

  static async getByUserId(userId) {
    try {
      const db = await AuthModel.read();
      const user = db.auth.find((user) => user.userId == userId);
      if (!user) {
        const error = new Error("Usuario no encontrado");
        error["statusCode"] = 404

        throw error
      }
      return user;
    } catch (error) {
      throw error;
    }
  }
}

export default AuthService;
