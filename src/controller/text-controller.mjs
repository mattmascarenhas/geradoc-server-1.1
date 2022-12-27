import Texts from "../models/text-model.mjs";

async function listAllTexts(req, res) {
  try {
    const texts = await Texts.findAll();

    res.status(201).json(texts);
  } catch (error) {
    res.status(500).send({ message: "Erro ao listar os textos!", error });
  }
}

async function createText(req, res) {
  try {
    const body = req.body;
    const text = await Texts.create(body);

    res.status(201).json(text);
  } catch (error) {
    res.status(500).send({ message: "Erro ao criar o texto!", error });
  }
}

async function deleteText(req, res) {
  try {
    const idText = req.params.id;
    const text = await Texts.findByPk(idText);

    await text.destroy();

    res.json("Client Deleted!");
  } catch (error) {
    res.status(500).send({ message: "Erro ao deletar o texto!", error });
  }
}

async function updateText(req, res) {
  try {
    const idText = req.params.id;
    const body = req.body;
    const text = await Texts.findByPk(idText);

    await text.update(body);

    res.json(text);
  } catch (error) {
    res.status(500).send({ message: "Erro ao atualizar o texto!", error });
  }
}

export default {
  listAllTexts,
  createText,
  deleteText,
  updateText,
};
