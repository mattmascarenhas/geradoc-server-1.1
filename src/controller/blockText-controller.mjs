import BlockText from "../models/blockText-model.mjs";

async function listAllBlockTexts(req, res) {
  try {
    const blockTexts = await BlockText.findAll();
    res.status(201).json(blockTexts);
  } catch (error) {
    res.status(500).send({ message: "Erro ao salvar blocos de texto", error });
  }
}

async function associateBlockWithText(req, res) {
  try {
    const body = req.body;
    await BlockText.bulkCreate(body);
    res.send({ message: "Blocos de texto salvos com sucesso", body });
  } catch (error) {
    res.status(500).send({ message: "Erro ao salvar blocos de texto", error });
  }
}

async function deleteBlockText(req, res) {
  try {
    const id = req.params.id;
    const blockText = await BlockText.findByPk(id);

    await blockText.destroy();
    res.json("Association Deleted!");
  } catch (error) {
    res.status(500).send({ message: "Esse bloco não existe", error });
  }
}

export default {
  listAllBlockTexts,
  associateBlockWithText,
  deleteBlockText,
};
