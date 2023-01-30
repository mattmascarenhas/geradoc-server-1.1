import Sequelize from "sequelize";
import dotenv from "dotenv";
dotenv.config();

const database = new Sequelize(
  process.env.MYSQLDATABASE,
  process.env.MYSQLUSER,
  process.env.MYSQLPASSWORD,
  {
    host: process.env.MYSQLHOST,
    dialect: "mysql",
    ssl: true,
    dialectOptions: {
      ssl: { rejectUnauthorized: true },
    },
  }
);

database
  .authenticate()
  .then(() => {
    console.log("🚀 Conexão com banco de dados realizada com sucesso! 🚀");
  })
  .catch((err) => {
    console.log("⚠️ Conexão com banco de dados não realizada! ⚠️");
    console.log(err);
  });

export default database;
