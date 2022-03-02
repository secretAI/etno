import Sequelize from "sequelize";
import { database } from "../database/main";
import User from "./User";

const Token = database.define("token", {
  id: {
    type: Sequelize.STRING,
    defaultValue: Sequelize.UUIDV4,
    primaryKey: true
  },
  reToken: {
    type: Sequelize.TEXT,
  },
  userid: {
    type: Sequelize.STRING,
    references: {
      model: User,
      key: "id"
    },
    unique: true
  }
});

Token.addHook("beforeUpdate", (record: any, reToken) => {
  record.reToken = reToken;
});

export default Token;
