import Sequelize from "sequelize";
import databaseAuth from "../server/databaseAuth.mjs";

const User = databaseAuth.define("user", {
  id: {
    type: Sequelize.INTEGER,
    unsigned: true,
    primaryKey: true,
    autoIncrement: true,
  },
  nome: {
    type: Sequelize.STRING(90),
    allowNull: false,
    defaultValue: " ",
  },
  cpf: {
    type: Sequelize.STRING(18),
    allowNull: false,
    defaultValue: " ",
  },
  telefone: {
    type: Sequelize.STRING(15),
    allowNull: false,
    defaultValue: " ",
  },
  email: {
    type: Sequelize.STRING(50),
    allowNull: false,
  },
  senha: {
    type: Sequelize.STRING(50),
    allowNull: false,
  },
  createdAt: {
    type: Sequelize.DATE,
    defaultValue: Sequelize.literal("CURRENT_TIMESTAMP"),
  },
  updatedAt: {
    type: Sequelize.DATE,
    defaultValue: Sequelize.literal("CURRENT_TIMESTAMP"),
  },
});

export default User;
