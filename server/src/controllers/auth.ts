import { NextFunction, Request, Response } from "express";
import { validationResult } from "express-validator";
import { ApiError } from "../exceptions/api-error";
import UserService from "../services/user-service";

class Auth {
  async signUp(req: Request, res: Response, next: NextFunction) {
    try {
      const errors = validationResult(req);
      if(!errors.isEmpty()) return next(ApiError.requestError("* Validation error during signup *"));
      const {email, password} = req.body;
      const userData = await UserService.signUp(email, password);
      if(userData.refresh === undefined) return next(ApiError.requestError("* Token was not found *"));
      res.cookie("reToken", userData.refresh, {
        maxAge: 2592000000, //30d
        httpOnly: true
      });

      return res.status(200).json(userData);
    }
    catch(err) {
      next(err);
    }
  }

  async logIn(req: Request, res: Response, next: NextFunction) {
    try {
      const errors = validationResult(req);
      if(!errors.isEmpty()) return next(ApiError.requestError("* Validation error during login *"));
      const {email, password} = req.body;
      const userData = await UserService.logIn(email, password);
      res.cookie("reToken", userData.refresh, {
        maxAge: 2592000000, //30d
        httpOnly: true
      });

      return res.status(200).json(userData);
    }
    catch(err) {
      next(err);
    }
  }

  async logOut(req: Request, res: Response, next: NextFunction) {
    try {
      const { reToken } = req.cookies;
      const token = await UserService.logOut(reToken);
      res.clearCookie("reToken");

      return res.status(200).json(token);
    }
    catch(err) {
      next(err);
    }
  }
}

export default new Auth();
