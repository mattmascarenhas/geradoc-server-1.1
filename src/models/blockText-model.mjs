import Sequelize from "sequelize";
import database from "../server/database.mjs";
import Blocks from "./block-model.mjs";
import Texts from "./text-model.mjs";

const BlockText = database.define("blocos_textos", {
  bloco_id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
  },
  texto_id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
  },
});

BlockText.belongsTo(Blocks, { foreignKey: "bloco_id" });
BlockText.belongsTo(Texts, { foreignKey: "texto_id" });

BlockText.sync({ force: false });

export default BlockText;
