import ClientBlock from "../models/clientBlock-model.mjs";

async function listAllClientsWithBlocks(req, res) {
  const clientsBlocks = await ClientBlock.findAll();
  try {
    return res.status(201).json(clientsBlocks);
  } catch (err) {
    return res.status(500).json({ erro: err.message });
  }
}

async function associateClientWithBlock(req, res) {
  const body = req.body;
  const clientWithBlock = await ClientBlock.create(body);
  try {
    return res.status(201).json(clientWithBlock);
  } catch (err) {
    return res.status(500).json({ error: err.message });
  }
}

async function deleteClientBlock(req, res) {
  const id = req.params.id;
  const clientBlockDelete = await ClientBlock.findByPk(id);

  await clientBlockDelete.destroy();
  try {
    return res.json("Association Deleted!");
  } catch (err) {
    return res.status(500).json({ erro: err.message });
  }
}

export default {
  listAllClientsWithBlocks,
  associateClientWithBlock,
  deleteClientBlock,
};
