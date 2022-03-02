import { Router } from "express";
import { body } from "express-validator";
import cors from "cors";
import Auth from "../controllers/auth";
import Public from "../controllers/public";
import { authMiddleware } from "../middlewares/auth-middleware";

const router = Router();

router.use(cors({
  origin: "*",
  optionsSuccessStatus: 200
}));

router.get("/", (req, res) => {
  res.json({
    status: 200,
    message: "Handshake"
  });
});

router.get("/test", authMiddleware, () => {
  console.log("* Hi, auth'ed one! *");
});

router.post("/signup", 
  body("email").isEmail(),
  body("password").isLength({min: 4, max: 20}),
  Auth.signUp);

router.post("/login", Auth.logIn);

router.post("/logout", Auth.logOut);

router.post("/posts/add", 
  authMiddleware,
  body("message").isLength({min: 4}),
  body("email").notEmpty(),
  Public.addPost);

export default router;
