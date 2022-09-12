const produtoService = require('../services/produto');

const findAllProdutoController = async (req, res) => {
  const offset = req.query.offset;
  const limit = req.query.limit;

  const produtos = await produtoService.findProdutoService(offset, limit);
  const total = await produtoService.countProdutos();

  const currentUrl = req.baseUrl;

  const next = offset + limit;
  const nextUrl = next < total ? `${currentUrl}?limit=${limit}&offset=${next}` : null;

  const previous = offset - limit < 0 ? null : offset - limit;
  const previousUrl = previous != null ? `${currentUrl}?limit=${limit}&offset=${previous}` : null;

  console.log(previousUrl);
  res.send(produtos);
};

const findProdutoByIdController = async (req, res) => {
  try{
    res.send(await produtoService.findProdutoByIdService(id));
  } catch (err) {
    res.status(500).send({ message: "Erro inesperado, tente novamente mais tarde"});
    console.log(err.message);
  }
};

const createProdutoController = async (req, res) => {
  try{
    res.send(await produtoService.createProdutoService(req.body));
  } catch (err) {
    res.status(500).send({ message: "Erro inesperado, tente novamente mais tarde"});
    console.log(err.message);
  }
};

const updateProdutoController = (req, res) => {
  try{
    res.send({ message: 'atualizado com sucesso!' });
  } catch (err) {
    res.status(500).send({ message: "Erro inesperado, tente novamente mais tarde"});
    console.log(err.message);
  }
};

const deleteProdutoController = (req, res) => {
  try{
  res.send({ message: 'deletado com sucesso!' });
  } catch (err) {
    res.status(500).send({ message: "Erro inesperado, tente novamente mais tarde"});
    console.log(err.message);
  }
};

module.exports = {
  findAllProdutoController,
  findProdutoByIdController,
  createProdutoController,
  updateProdutoController,
  deleteProdutoController
};