import User from "../models/authUser-model.mjs";

async function singInRequest(req, res) {
  try {
    const user = await User.findAll();

    res.status(201).json(user);
  } catch (error) {
    res.status(500).send({ message: "Erro ao listar os usuários!", error });
  }
}

async function listOneUser(req, res) {
  try {
    const idUser = req.params.id;
    const user = await User.findByPk(idUser);

    res.status(201).json(user);
  } catch (error) {
    res.status(500).send({ message: "Erro ao listar o usuário!", error });
  }
}

export default { singInRequest, listOneUser };
