import Sequelize from "sequelize";
import { database } from "../database/main";
import Post from "./Post";
import Token from "./Token";

const User = database.define("user", {
  id: {
    type: Sequelize.STRING,
    primaryKey: true,
    defaultValue: Sequelize.UUIDV4
  },
  email: {
    type: Sequelize.STRING,
    unique: true,
    allowNull: false
  },
  password: {
    type: Sequelize.STRING,
    allowNull: false
  }
});

export default User;
