import Texts from "../models/text-model.mjs";

async function listAllTexts(req, res) {
  const texts = await Texts.findAll();
  try {
    return res.status(201).json(texts);
  } catch (err) {
    return res.status(500).json({ erro: err.message });
  }
}

async function createText(req, res) {
  const body = req.body;
  const text = await Texts.create(body);
  try {
    return res.status(201).json(text);
  } catch (err) {
    return res.status(500).json({ error: err.message });
  }
}

async function deleteText(req, res) {
  const idText = req.params.id;
  const text = await Texts.findByPk(idText);

  await text.destroy();
  try {
    return res.json("Client Deleted!");
  } catch (err) {
    return res.status(500).json({ erro: err.message });
  }
}

async function updateText(req, res) {
  const idText = req.params.id;
  const body = req.body;
  const text = await Texts.findByPk(idText);

  await text.update(body);
  try {
    return res.json(text);
  } catch (err) {
    return res.status(500).json({ erro: err.message });
  }
}

export default {
  listAllTexts,
  createText,
  deleteText,
  updateText,
};
