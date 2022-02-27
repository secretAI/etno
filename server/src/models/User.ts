import Sequelize from "sequelize";
import { database } from "../database/main";

export const User = database.define("user", {
  id: {
    type: Sequelize.STRING,
    primaryKey: true
  },
  email: {
    type: Sequelize.STRING
  },
  password: {
    type: Sequelize.STRING
  }
});
