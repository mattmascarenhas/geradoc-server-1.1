import Clients from "../models/client-model.mjs";

async function listAllClients(req, res) {
  try {
    const clients = await Clients.findAll();

    res.status(201).json(clients);
  } catch (error) {
    res.status(500).send({ message: "Erro ao listar os clientes!", error });
  }
}

async function listOneClient(req, res) {
  try {
    const idClient = req.params.id;
    const client = await Clients.findByPk(idClient);

    res.status(201).json(client);
  } catch (error) {
    res.status(500).send({ message: "Erro ao listar o cliente!", error });
  }
}

async function createClient(req, res) {
  try {
    const body = req.body;
    const client = await Clients.create(body);

    res.status(201).json(client);
  } catch (error) {
    res.status(500).send({ message: "Erro ao criar o cliente!", error });
  }
}

async function deleteClient(req, res) {
  try {
    const idClient = req.params.id;
    const client = await Clients.findByPk(idClient);

    await client.destroy();

    res.json("Client Deleted!");
  } catch (error) {
    res.status(500).send({ message: "Erro ao deletar o cliente!", error });
  }
}

async function updateClient(req, res) {
  try {
    const idClient = req.params.id;
    const body = req.body;
    const cliente = await Clients.findByPk(idClient);

    await cliente.update(body);

    res.json(cliente);
  } catch (error) {
    res.status(500).send({ message: "Erro ao atualizar o cliente!", error });
  }
}

export default {
  listAllClients,
  listOneClient,
  createClient,
  deleteClient,
  updateClient,
};
