import Blocks from "../models/block-model.mjs";

async function listAllBlocks(req, res) {
  const blocks = await Blocks.findAll();
  try {
    return res.status(201).json(blocks);
  } catch (err) {
    return res.status(500).json({ erro: err.message });
  }
}
