import Blocks from "../models/block-model.mjs";

async function listAllBlocks(req, res) {
  try {
    const blocks = await Blocks.findAll();
    res.status(201).json(blocks);
  } catch (error) {
    res.status(500).send({ message: "Erro ao os blocos!", error });
  }
}

async function createBlock(req, res) {
  try {
    const body = req.body;
    const block = await Blocks.create(body);
    res.status(201).json(block);
  } catch (error) {
    res.status(500).send({ message: "Erro ao criar um bloco!", error });
  }
}

async function deleteBlock(req, res) {
  try {
    const idBlock = req.params.id;
    const block = await Blocks.findByPk(idBlock);

    await block.destroy();
    res.json("Block Deleted!");
  } catch (error) {
    res.status(500).send({ message: "Erro ao deletar o bloco!", error });
  }
}

async function updateBlock(req, res) {
  const idBlock = req.params.id;
  const body = req.body;
  const block = await Blocks.findByPk(idBlock);

  await block.update(body);
  try {
    res.json(block);
  } catch (error) {
    res.status(500).send({ message: "Erro ao atualizar o bloco!", error });
  }
}
export default {
  listAllBlocks,
  createBlock,
  deleteBlock,
  updateBlock,
};
