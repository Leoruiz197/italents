const produtoService = require('../services/produto');

const findAllProdutoController = async (req, res) => {
  try{
    res.send(await produtoService.findProdutoService());
  } catch (err) {
    res.status(500).send({ message: "Erro inesperado, tente novamente mais tarde"});
    console.log(err.message);
  }
};

const findProdutoByIdController = async (req, res) => {
  try{
    res.send(await produtoService.findProdutoByIdService(req.params.id));
  } catch (err) {
    res.status(500).send({ message: "Erro inesperado, tente novamente mais tarde"});
    console.log(err.message);
  }
};

const createProdutoController = async (req, res) => {
  try{
    const corpo = {
      ...req.body,
      createdAt: new Date(),
    }
    res.send(await produtoService.createProdutoService(corpo));
  } catch (err) {
    res.status(500).send({ message: "Erro inesperado, tente novamente mais tarde"});
    console.log(err.message);
  }
};

const updateProdutoController = async (req, res) => {
  try{
    res.send(await produtoService.updateProdutoService(req.params.id, req.body));
  } catch (err) {
    res.status(500).send({ message: "Erro inesperado, tente novamente mais tarde"});
    console.log(err.message);
  }
};

const deleteProdutoController = async (req, res) => {
  try{
    const del = await produtoService.deleteProdutoService(req.params.id);

    if(del.deletedCount > 0 ){
      res.status(200).send({ message: 'deletado com sucesso!' });
    }else{
      res.status(404).send({ message: 'Usuario não encontrado para deletar' });
    }
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