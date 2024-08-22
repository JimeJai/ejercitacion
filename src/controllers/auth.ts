import { NextFunction, Request, Response } from "express";
import AuthService from "../services/auth";

class AuthController {
  static register(req: Request, res: Response, next: NextFunction) {
    try { AuthService.register(req.body)
    } catch (error) {
      next(error);
    }
  }

  static login(req: Request, res: Response, next: NextFunction) {
    try {
    } catch (error) {
      next(error);
    }
  }
}

export default AuthController;
