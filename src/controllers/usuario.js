const usuarioService = require('../services/usuario');

const findAllUsuarioController = (req, res) => {
    res.send({ message: 'achado todos com sucesso!' });
};

const findUsuarioByIdController = (req, res) => {
  res.send({ message: 'achado com sucesso!' });
};

const createUsuarioController = (req, res) => {
  res.send({ message: 'criado com sucesso!' });
};

const updateUsuarioController = (req, res) => {
  res.send({ message: 'atualizado com sucesso!' });
};

const deleteUsuarioController = (req, res) => {
  res.send({ message: 'deletado com sucesso!' });
};

module.exports = {
    findAllUsuarioController,
    findUsuarioByIdController,
    createUsuarioController,
    updateUsuarioController,
    deleteUsuarioController
};