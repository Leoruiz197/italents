const produtoService = require('../services/produto');

const findAllProdutoController = (req, res) => {
    res.send({ message: 'achado todos com sucesso!' });
};

const findProdutoByIdController = (req, res) => {
  res.send({ message: 'achado com sucesso!' });
};

const createProdutoController = (req, res) => {
  res.send({ message: 'criado com sucesso!' });
};

const updateProdutoController = (req, res) => {
  res.send({ message: 'atualizado com sucesso!' });
};

const deleteProdutoController = (req, res) => {
  res.send({ message: 'deletado com sucesso!' });
};

module.exports = {
    findAllProdutoController,
    findProdutoByIdController,
    createProdutoController,
    updateProdutoController,
    deleteProdutoController
};