import { SequelizeScopeError } from "sequelize/types";
import { ApiError } from "../exceptions/api-error";

export function errorHandler(err: Error | SequelizeScopeError, req: any, res: any, next: any) {
  console.log(err);
  if(err instanceof ApiError) {
    return res.status(err.status).json({message: err.message});
  }
  return res.status(500).json({message: "* Unexpected Server Error *"});
}

