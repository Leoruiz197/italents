const categoriaService = require("../services/categoria");

const findAllCategoriaController = (req, res) => {
  res.send({ message: "achado todos com sucesso!" });
};

const findCategoriaByIdController = (req, res) => {
  res.send({ message: "achado com sucesso!" });
};

const createCategoriaController = (req, res) => {
  res.send({ message: "criado com sucesso!" });
};

const updateCategoriaController = (req, res) => {
  res.send({ message: "atualizado com sucesso!" });
};

const deleteCategoriaController = (req, res) => {
  res.send({ message: "deletado com sucesso!" });
};

module.exports = {
  findAllCategoriaController,
  findCategoriaByIdController,
  createCategoriaController,
  updateCategoriaController,
  deleteCategoriaController,
};
