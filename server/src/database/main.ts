import { Sequelize } from "sequelize";
import configs from "../config/postgres";

const config = configs.development;

export const database = new Sequelize(config.uri, config);
