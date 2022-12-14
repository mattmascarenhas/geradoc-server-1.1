import Sequelize from "sequelize";
import database from "../server/database.mjs";

const Texts = database.define("textos", {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  titulo: {
    type: Sequelize.STRING,
    defaultValue: "Sem título",
  },
  texto: {
    type: Sequelize.TEXT,
    allowNull: false,
  },
});

export default Texts;
