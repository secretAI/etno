import Sequelize from "sequelize";
import { database } from "../database/main";

const Token = database.define("token", {
  reToken: {
    type: Sequelize.TEXT,
    primaryKey: true,
  },
  userid: {
    type: Sequelize.STRING,
    unique: true
  }
});

export default Token;
