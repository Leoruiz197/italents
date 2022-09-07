const pedidoService = require('../services/pedido');

const findAllPedidoController = (req, res) => {
    res.send({ message: 'achado todos com sucesso!' });
};

const findPedidoByIdController = (req, res) => {
  res.send({ message: 'achado com sucesso!' });
};

const createPedidoController = (req, res) => {
  res.send({ message: 'criado com sucesso!' });
};

const updatePedidoController = (req, res) => {
  res.send({ message: 'atualizado com sucesso!' });
};

const deletePedidoController = (req, res) => {
  res.send({ message: 'deletado com sucesso!' });
};

module.exports = {
    findAllPedidoController,
    findPedidoByIdController,
    createPedidoController,
    updatePedidoController,
    deletePedidoController
};