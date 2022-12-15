import Sequelize from "sequelize";
import database from "../server/database.mjs";

const Blocks = database.define("textos", {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  titulo: {
    type: Sequelize.STRING,
    defaultValue: "Sem título",
  },
});

export default Blocks;
