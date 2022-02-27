import express from "express";
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import { getEnv } from "./src/tools/getEnv";
import { connectToDB } from "./src/database/main";
import routes from "./src/routes/routes";

const port = getEnv("PORT");
const host = getEnv("HOST");

const app = express();

connectToDB();

app.use(bodyParser.json());
app.use(cookieParser());
app.use("/api", routes);

app.listen(port, () => {
  console.log(`App has started
  ${host}:${port}`);
});
