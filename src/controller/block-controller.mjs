import Blocks from "../models/block-model.mjs";

async function listAllBlocks(req, res) {
  const blocks = await Blocks.findAll();
  try {
    return res.status(201).json(blocks);
  } catch (err) {
    return res.status(500).json({ erro: err.message });
  }
}

async function createBlock(req, res) {
  const body = req.body;
  const block = await Blocks.create(body);
  try {
    return res.status(201).json(block);
  } catch (err) {
    return res.status(500).json({ erro: err.message });
  }
}

async function deleteBlock(req, res) {
  const idBlock = req.params.id;
  const block = await Blocks.findByPk(idBlock);

  await block.destroy();
  try {
    return res.json("Block Deleted!");
  } catch (err) {
    return res.status(500).json({ erro: err.message });
  }
}

async function updateBlock(req, res) {
  const idBlock = req.params.id;
  const body = req.body;
  const block = await Blocks.findByPk(idBlock);

  await block.update(body);
  try {
    return res.json(cliente);
  } catch (err) {
    return res.status(500).json({ erro: err.message });
  }
}
export default {
  listAllBlocks,
  createBlock,
  deleteBlock,
  updateBlock,
};
