import {Sequelize} from "sequelize";
import configs from "../config/postgres";

const config = configs.development;

export const database = new Sequelize(config.database, config.username, config.password, {
  dialect: "postgres",
  port: config.port,
  logging: false
});

export async function connectToDB() {
  try {
    await database.sync({
      force: false
    });
    console.log("* PostgresQL: Connection Successful *");
  }
  catch(err) {
    console.log(err);
  }
}
