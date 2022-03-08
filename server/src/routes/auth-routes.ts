import { Router } from "express";
import { body } from "express-validator";
import Auth from "../controllers/auth";

class AuthRouter {
  router = Router();

  constructor() {
    this.initRoutes();
  }

  initRoutes() {
    this.router.post("/signup", 
      body("email").isEmail(),
      body("password").isLength({min: 4, max: 20}),
      Auth.signUp);

    this.router.post("/login", 
      body("email").isEmail(),
      Auth.logIn);

    this.router.post("/logout", Auth.logOut);
  }
}

export default AuthRouter;
