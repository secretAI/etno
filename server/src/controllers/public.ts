/* eslint-disable @typescript-eslint/no-explicit-any */
import { validationResult } from "express-validator";
import { ApiError } from "../exceptions/api-error";

import ContentService from "../services/content-service";

class Public {
  async addPost(req: any, res: any, next: any) {
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

  async getAllPosts(req: any, res: any, next: any) {
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
