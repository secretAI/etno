import { Router } from "express";
import Test from "../controllers/test";

const router = Router();

router.get("/", (req, res) => {
  res.json({
    status: 200,
    message: "Handshake"
  });
});

router.get("/users/all", Test.getAllUsers);

router.post("/users/new", Test.createNewUser);

export default router;
