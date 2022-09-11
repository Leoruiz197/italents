const Produto = require("../models/Produto");

const findProdutoService = async () => {
  return await Produto.find();
};

const findProdutoByIdService = async (id) => {
  return await Produto.findById(id);
};

const createProdutoService = async (body) => {
  return await Produto.create(body);
};

const updateProdutoService = async (id, body) => {
  return await Produto.updateOne({ where: id }, body, { returnDocument: "after" });
};

const deleteProdutoService = async (id) => {
  return await Produto.deleteOne({ where: id });
};

module.exports = {
  findProdutoService,
  findProdutoByIdService,
  createProdutoService,
  updateProdutoService,
  deleteProdutoService
};
