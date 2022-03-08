import { Router } from "express";
import cors from "cors";

class BaseRouter {
  router = Router();

  constructor() {
    this.setUp();
  }

  setUp() {
    this.router.use(cors({
      origin: "*",
      optionsSuccessStatus: 200
    }));
    
    this.router.get("/", (req, res) => {
      res.json({
        message: "Handshake"
      });
    });
  }
}

export default BaseRouter;
