import {getEnv}from "../tools/getEnv";

export default  {
  development: {
    username: getEnv("PG_USER"),
    password: getEnv("PG_PASS"),
    database: "etno",
    host: getEnv("PG_HOST"),
    port: 5432,
    uri: getEnv("PG_URI"),
    logging: false
  },
  production: {
    username: getEnv("PG_USER"),
    password: getEnv("PG_PASS"),
    database: "etprod",
    host: getEnv("PG_HOST"),
    port: 5050,
    logging: true
  }
};