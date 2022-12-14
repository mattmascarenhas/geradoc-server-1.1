import Sequelize from "sequelize";
import database from "../server/database.mjs";

const Clients = database.define("clientes", {
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
  rg: {
    type: Sequelize.STRING(16),
    defaultValue: " ",
  },
  nacionalidade: {
    type: Sequelize.STRING(25),
    allowNull: false,
  },
  estado_civil: {
    type: Sequelize.STRING(16),
    allowNull: false,
  },
  orgao_emissor: {
    type: Sequelize.STRING(12),
    defaultValue: " ",
  },
  endereco: {
    type: Sequelize.STRING(60),
    defaultValue: " ",
  },
  cidade: {
    type: Sequelize.STRING(20),
    allowNull: false,
  },
  estado: {
    type: Sequelize.STRING(20),
    allowNull: false,
  },
  cep: {
    type: Sequelize.STRING(9),
    defaultValue: " ",
  },
  numero: {
    type: Sequelize.STRING(10),
    defaultValue: " ",
  },
  telefone: {
    type: Sequelize.STRING(15),
    defaultValue: " ",
  },
  email: {
    type: Sequelize.STRING(50),
    defaultValue: " ",
  },
  profissao: {
    type: Sequelize.STRING(30),
    defaultValue: " ",
  },
});

export default Clients;
