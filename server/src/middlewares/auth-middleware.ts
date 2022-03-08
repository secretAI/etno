import { NextFunction, Request, Response } from "express";
import { ApiError } from "../exceptions/api-error";
import TokenService from "../services/token-service";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function authMiddleware(req: Request | any, res: Response, next: NextFunction) {
  try {
    const authHeader = req.headers.authorization;
    if(!authHeader) return next(ApiError.authError());
    const accessToken = authHeader.split(" ")[1];
    const validation = TokenService.validateToken(accessToken, "JWT_SECRET_ACCESS");
    if(!validation) return next(ApiError.authError());
    req.user = validation;
    next();
  }
  catch(err) {
    return next(ApiError.authError());
  }
}
