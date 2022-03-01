import Sequelize from "sequelize";
import { database } from "../database/main";
import User from "./User";

const Token = database.define("token", {
  reToken: {
    type: Sequelize.TEXT,
    primaryKey: true,
  },
  userid: {
    type: Sequelize.STRING,
    references: {
      model: User,
      key: "id"
    }
  }
});

Token.addHook("beforeUpdate", (record: any, reToken) => {
  record.reToken = reToken;
});

export default Token;
