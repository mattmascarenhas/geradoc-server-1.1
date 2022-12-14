import Sequelize from "sequelize";

const database = new Sequelize("geradoc", "root", "root", {
  host: "localhost",
  dialect: "mysql",
});

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
