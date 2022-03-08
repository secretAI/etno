import { JwtPayload } from "jsonwebtoken";

declare global {
  namespace Express {
    export interface Application {
      listen(port: string, callback: () => void): void;
    }
  
    export interface Request {
      user?: JwtPayload | string;
    }
  }
}

