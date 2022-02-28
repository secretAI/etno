import express from "express";
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import routes from "./src/routes/routes";
import { startApp } from "./src/start";

const app = express();

app.use(bodyParser.json());
app.use(cookieParser());
app.use("/api", routes);

startApp(app);
