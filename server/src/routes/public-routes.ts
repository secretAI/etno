import { Router } from "express";
import { body } from "express-validator";
import Public from "../controllers/public";
import { authMiddleware } from "../middlewares/auth-middleware";

class PublicRouter {
  router = Router();

  constructor() {
    this.initRoutes();
  }

  initRoutes() {
    this.router.post("/posts/all",
      authMiddleware,
      Public.getAllPosts);

    this.router.post("/posts/add", 
      authMiddleware,
      body("message").isLength({min: 4}),
      body("author").notEmpty(),
      Public.addPost);

    this.router.post("/posts/remove",
      authMiddleware,
      Public.removePost);
  }
}

export default PublicRouter;
