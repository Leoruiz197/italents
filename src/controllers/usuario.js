const usuarioService = require('../services/usuario');
const { v4: uuidv4 } = require('uuid');

const findAllUsuarioController = async (req, res) => {
  try{
    res.send(await usuarioService.findUsuarioService());
  } catch (err) {
    res.status(500).send({ message: "Erro inesperado, tente novamente mais tarde"});
    console.log(err.message);
  }
};

const findUsuarioByIdController = async (req, res) => {
  try{
    res.send(await usuarioService.findUsuarioByIdService(req.params.id));
  } catch (err) {
    res.status(500).send({ message: "Erro inesperado, tente novamente mais tarde"});
    console.log(err.message);
  }
};

const createUsuarioController = async (req, res) => {
  try{
    const corpo = {
      ...req.body,
      createdAt: new Date(),
    }
    res.send(await usuarioService.createUsuarioService(corpo));
  } catch (err) {
    res.status(500).send({ message: "Erro inesperado, tente novamente mais tarde"});
    console.log(err.message);
  }
};

const updateUsuarioController = async (req, res) => {
  try{
    res.send(await usuarioService.updateUsuarioService(req.params.id, req.body));
  } catch (err) {
    res.status(500).send({ message: "Erro inesperado, tente novamente mais tarde"});
    console.log(err.message);
  }
};

const deleteUsuarioController = async (req, res) => {
  try{
    const del = await usuarioService.deleteUsuarioService(req.params.id);
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

const addUserEnderecoController = async (req,res) =>{
  try{
    req.body.id = uuidv4();
    req.body.created = new Date();
    const endereco = await usuarioService.addUserEnderecoService(req.params.id,req.body);

    console.log(endereco)
    if(endereco.ok == 1){
      res.status(200).send({ message: 'endereco adicionado com sucesso' });  
    }else{
      res.status(400).send({ message: 'algo deu errado, tente novamente' });  
    }
   
  } catch (err) {
    res.status(500).send({ message: "Erro inesperado, tente novamente mais tarde"});
    console.log(err.message);
  }
}

const removeUserEnderecoController = async (req,res) =>{
  try{
    const endereco = await usuarioService.removeUserEnderecoService(req.query.id,req.query.idEndereco);

    if(endereco.ok == 1){
      res.status(200).send({ message: 'endereco removido com sucesso' });  
    }else{
      res.status(400).send({ message: 'algo deu errado, tente novamente' });  
    }
   
  } catch (err) {
    res.status(500).send({ message: "Erro inesperado, tente novamente mais tarde"});
    console.log(err.message);
  }
}

module.exports = {
    findAllUsuarioController,
    findUsuarioByIdController,
    createUsuarioController,
    updateUsuarioController,
    deleteUsuarioController,
    addUserEnderecoController,
    removeUserEnderecoController
};