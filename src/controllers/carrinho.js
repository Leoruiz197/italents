const carrinhoService = require('../services/carrinho');

const findCarrinhoByIdController = (req, res) => {
  res.send({ message: 'achado com sucesso!' });
};

const createCarrinhoController = (req, res) => {
  res.send({ message: 'criado com sucesso!' });
};

const updateCarrinhoController = (req, res) => {
  res.send({ message: 'atualizado com sucesso!' });
};

const deleteCarrinhoController = (req, res) => {
  res.send({ message: 'deletado com sucesso!' });
};

module.exports = {
    findCarrinhoByIdController,
    createCarrinhoController,
    updateCarrinhoController,
    deleteCarrinhoController
};