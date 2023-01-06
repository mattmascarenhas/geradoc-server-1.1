import Sequelize from "sequelize";

const databaseAuth = new Sequelize("geradocAuth", "root", "root", {
  host: "localhost",
  dialect: "mysql",
});

databaseAuth
  .authenticate()
  .then(() => {
    console.log("🚀 Conexão com banco de dados realizada com sucesso! 🚀");
  })
  .catch((err) => {
    console.log("⚠️ Conexão com banco de dados não realizada! ⚠️");
    console.log(err);
  });

export default databaseAuth;
