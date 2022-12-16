import BlockText from "../models/blockText-model.mjs";

async function listAllBlockTexts(req, res) {
  const blockTexts = await BlockText.findAll();
  try {
    return res.status(201).json(blockTexts);
  } catch (err) {
    return res.status(500).json({ erro: err.message });
  }
}

async function associateBlockWithText(req, res) {
  const body = req.body;
  const blockWithText = await BlockText.create(body);
  try {
    return res.status(201).json(blockWithText);
  } catch (err) {
    return res.status(500).json({ error: err.message });
  }
}

async function deleteBlockText(req, res) {
  const body = req.body;
  const blockText = await BlockText.destroy({
    where: {
      bloco_id: body.bloco_id,
      texto_id: body.texto_id,
    },
  });
  try {
    return res.json("Association Deleted!");
  } catch (err) {
    return res.status(500).json({ erro: err.message });
  }
}

export default {
  listAllBlockTexts,
  associateBlockWithText,
  deleteBlockText,
};
