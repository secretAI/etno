import { validationResult } from "express-validator";
import { ApiError } from "../exceptions/api-error";
import { Request, Response, NextFunction } from "express";
import ContentService from "../services/content-service";

class Public {
  async addPost(req: Request, res: Response, next: NextFunction)  {
    try {
      const errors = validationResult(req);
      if(!errors.isEmpty()) return next(ApiError.requestError("* Validation error during adding a post *"));
      const {author, title, message, content} = req.body;
      const post = await ContentService.addPost(author, title, message, content);

      res.status(200).json(post);
    }
    catch(err) {
      next(err);
    }
  }

  async getAllPosts(req: Request, res: Response, next: NextFunction) {
    try {
      const posts = await ContentService.getAllPosts();

      res.status(200).json(posts);
    }
    catch(err) {
      next(err);
    }
  }
}

export default new Public();
