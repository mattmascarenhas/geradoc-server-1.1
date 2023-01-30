import Users from "../models/user-model.mjs";

async function listAllUsers(req, res) {
  try {
    const users = await Users.findAll();

    res.status(201).json(users);
  } catch (error) {
    res.status(500).send({ message: "Erro ao listar os usuários!", error });
  }
}

async function listOneUser(req, res) {
  try {
    const idUser = req.params.id;
    const user = await Users.findByPk(idUser);

    res.status(201).json(user);
  } catch (error) {
    res.status(500).send({ message: "Erro ao listar o usuário!", error });
  }
}

export default {
  listAllUsers,
  listOneUser,
};
