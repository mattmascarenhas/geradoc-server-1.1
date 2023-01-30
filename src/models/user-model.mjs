import Sequelize from "sequelize";
import database from "../server/database.mjs";

const Users = database.define("usuarios", {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  nome: {
    type: Sequelize.STRING(70),
    allowNull: false,
  },
  cpf: {
    type: Sequelize.STRING(18),
    allowNull: false,
  },
  telefone: {
    type: Sequelize.STRING(15),
    defaultValue: " ",
  },
  email: {
    type: Sequelize.STRING(50),
    defaultValue: " ",
  },
  senha: {
    type: Sequelize.STRING(18),
    allowNull: false,
  },
});

export default Users;
