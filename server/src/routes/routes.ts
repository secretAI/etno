import { Router } from "express";
import { body } from "express-validator";
import Auth from "../controllers/auth";

const router = Router();

router.get("/", (req, res) => {
  res.json({
    status: 200,
    message: "Handshake"
  });
});

router.post("/signup", 
  body("email").isEmail(),
  body("password").isLength({min: 4, max: 20}),
  Auth.signUp);

router.post("/login", Auth.logIn);

router.post("/logout", Auth.logOut);

export default router;
