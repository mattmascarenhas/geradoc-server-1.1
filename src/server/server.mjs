import express from "express";
import Clientes from "../models/cliente.mjs";
import cors from "cors";

const app = express();
const port = 3333;

app.use(express.json());
app.use(cors());

/*=====================CLIENT======================= */
// Criando a rota para listar clientes
app.get("/clients", async (req, res) => {
  const clientes = await Clientes.findAll();
  try {
    return res.status(201).json(clientes);
  } catch (err) {
    return res.status(500).json({ erro: err.message });
  }
});

app.listen(port);

//rota para listar um unico cliente
app.get("/clients/:id", async (req, res) => {
  const idClient = req.params.id;
  const cliente = await Clientes.findByPk(idClient);
  try {
    return res.json(cliente);
  } catch (err) {
    return res.status(500).json({ erro: err.message });
  }
});

//rota para criar um client
app.post("/clients", async (req, res) => {
  const body = req.body;
  const cliente = await Clientes.create(req.body);
  try {
    return res.status(201).json(cliente);
  } catch (err) {
    return res.status(500).json({ error: err.message });
  }
});

//rota para deletar um client
app.delete("/clients/:id", async (req, res) => {
  const idClient = req.params.id;
  const cliente = await Clientes.findByPk(idClient);
  await cliente.destroy();
  try {
    return res.json("Client Deleted!");
  } catch (err) {
    return res.status(500).json({ erro: err.message });
  }
});

//rota para editar um client
app.put("/client/:id", async (req, res) => {
  const idClient = req.params.id;
  const body = req.body;

  const cliente = await Clientes.findByPk(idClient);
  await cliente.update(body);
  try {
    return res.json(cliente);
  } catch (err) {
    return res.status(500).json({ erro: err.message });
  }
});
