import {getEnv}from "../tools/getEnv";

export default {
  development: {
    username: getEnv("PG_USER"),
    password: getEnv("PG_PASS"),
    database: "et-db",
    host: getEnv("PG_HOST"),
    port: 5050
  },
  test: {
    username: getEnv("PG_USER"),
    password: getEnv("PG_PASS"),
    database: "et-test",
    host: getEnv("PG_HOST"),
  },
  production: {
    username: getEnv("PG_USER"),
    password: getEnv("PG_PASS"),
    database: "et-pro",
    host: getEnv("PG_HOST"),
    port: 4040,
  }
};
