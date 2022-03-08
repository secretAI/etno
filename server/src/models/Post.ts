import Sequelize from "sequelize";
import { database } from "../database/main";
import User from "./User";

const Post = database.define("post", {
  id: {
    type: Sequelize.STRING,
    primaryKey: true,
    defaultValue: Sequelize.UUIDV4
  },
  date: {
    type: Sequelize.DATE,
    defaultValue: new Date()
  },
  author: {
    type: Sequelize.STRING,
    allowNull: false,
    references: {
      model: User,
      key: "email"
    }
  },
  title: {
    type: Sequelize.STRING,
    allowNull: false
  },
  message: {
    type: Sequelize.TEXT,
    allowNull: false
  },
  content: {
    type: Sequelize.STRING,
    defaultValue: null
  },
  deletedAt: {
    type: Sequelize.STRING,
    defaultValue: null
  }
});

export default Post;
