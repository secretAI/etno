import { Sequelize } from "sequelize/types";

export async function connectToDB(database: Sequelize) {
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
