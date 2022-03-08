import express, { Application } from "express";
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import { errorHandler } from "./middlewares/error-handler";
import { database } from "./database/main";
import { connectToDB } from "./database/connection";

export class App {
  app: Application;
  host: string;
  port: number;

  constructor(config: {port: number, host: string, routes: any[]}) {
    this.app = express();
    this.port = config.port;
    this.host = config.host,
    this.setup();
    this.routes(config.routes);
  }

  private routes(routes: {
    forEach: (arg: (controller: any) => void) => void;
  }): void {
    routes.forEach((controller) => {
      this.app.use("/api", controller.router);
    });
  }

  private setup() {
    this.app.use(bodyParser.json());
    this.app.use(cookieParser());
    this.app.use(errorHandler);
  }

  private async connectToDB() {
    await connectToDB(database);
    this.app.emit("pgconn");
  }

  private listen() {
    this.app.listen(this.port, () => {
      console.log( `* App has started... *
      ${this.host}:${this.port}/api`);
    });
  }

  public start() {
    this.connectToDB();
    this.app.on("pgconn", () => {
      this.listen();
    });
  }
}
