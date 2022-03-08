import { App } from "./src/app";
import AuthRoutes from "./src/routes/auth-routes";
import PublicRoutes from "./src/routes/public-routes";
import BasicRoutes from "./src/routes/basic-routes";
import { getEnv } from "./src/tools/getEnv";

const port = +getEnv("PORT");
const host = getEnv("HOST");
const routes = [
  new BasicRoutes(),
  new AuthRoutes(),
  new PublicRoutes()
];

const app = new App({
  port,
  host,
  routes
});

app.start();
