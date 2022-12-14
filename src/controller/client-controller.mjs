import Clients from "../models/client-model.mjs";

async function listAllClients(req, res) {
  const clients = await Clients.findAll();
  try {
    return res.status(201).json(clients);
  } catch (err) {
    return res.status(500).json({ erro: err.message });
  }
}

async function listOneClient(req, res) {
  const clients = await Clients.findAll();
  try {
    return res.status(201).json(clients);
  } catch (err) {
    return res.status(500).json({ erro: err.message });
  }
}

async function createClient(req, res) {
  const body = req.body;
  const client = await Clients.create(body);
  try {
    return res.status(201).json(client);
  } catch (err) {
    return res.status(500).json({ error: err.message });
  }
}

async function deleteClient(req, res) {
  const idClient = req.params.id;
  const client = await Clients.findByPk(idClient);

  await client.destroy();
  try {
    return res.json("Client Deleted!");
  } catch (err) {
    return res.status(500).json({ erro: err.message });
  }
}

async function updateClient(req, res) {
  const idClient = req.params.id;
  const body = req.body;
  const cliente = await Clients.findByPk(idClient);

  await cliente.update(body);
  try {
    return res.json(cliente);
  } catch (err) {
    return res.status(500).json({ erro: err.message });
  }
}

export default {
  listAllClients,
  listOneClient,
  createClient,
  deleteClient,
  updateClient,
};
