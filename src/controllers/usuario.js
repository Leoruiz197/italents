const usuarioService = require('../services/usuario');

const findAllUsuarioController = (req, res) => {
    res.send({ message: 'achado todos com sucesso!' });
};

const findUsuarioByIdController = (req, res) => {
  res.send({ message: 'achado com sucesso!' });
};

const createUsuarioController = async (req, res) => {
  try{
    res.send(await usuarioService.createUsuarioService(req.body));
  } catch (err) {
    res.status(500).send({ message: "Erro inesperado, tente novamente mais tarde"});
    console.log(err.message);
  }
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