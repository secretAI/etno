import { validationResult } from "express-validator";
import { ApiError } from "../exceptions/api-error";
import User from "../models/User";
import ContentService from "../services/content-service";

class Public {
  async addPost(req: any, res: any, next: any) {
    try {
      const errors = validationResult(req);
      if(!errors.isEmpty()) return next(ApiError.requestError("* Validation error during adding a post *"));
      const {email, message, content} = req.body;
      const post = await ContentService.addPost(email, message, content);

      res.status(200).json(post);
    }
    catch(err) {
      next(err);
    }
  }
}

export default new Public();
