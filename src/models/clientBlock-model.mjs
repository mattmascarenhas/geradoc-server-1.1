import Sequelize from "sequelize";
import database from "../server/database.mjs";
import Blocks from "./block-model.mjs";
import Clients from "./client-model.mjs";

const ClientBlock = database.define("clientes_blocos", {
  cliente_id: {
    type: Sequelize.INTEGER,
  },
  bloco_id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
  },
});

ClientBlock.belongsTo(Clients, { foreignKey: "cliente_id" });
ClientBlock.belongsTo(Blocks, { foreignKey: "bloco_id" });

ClientBlock.sync({ force: false });

export default ClientBlock;
