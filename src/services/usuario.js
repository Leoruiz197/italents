const Usuario = require("../models/Usuario");

const findUsuarioService = () => {
  return Usuario.find();
};

const findUsuarioByIdService = (id) => {
  return Usuario.findById(id);
};

const createUsuarioService = async (body) => {
  return await Usuario.create(body);
};

const updateUsuarioService = async (id, body) => {
  const corpo =  await Usuario.updateOne({ where: id }, body, { returnDocument: "after" });
  //arrumar aqui
  console.log(corpo);
  return corpo;
};

const deleteUsuarioService = async (id) => {
  return Usuario.deleteOne({ where: id });
};

const addUserEnderecoService = async (id, endereco) =>
  Usuario.findOneAndUpdate(
    {
      _id: id,
    },
    {
      $push: {
        enderecos: endereco,
      },
    },
    {
      rawResult: true,
    }
  );

const removeUserEnderecoService = async (id, idEndereco) =>
  Usuario.findOneAndUpdate(
    {
      _id: id,
    },
    {
      $pull: {
        enderecos: {
          id: idEndereco,
        },
      },
    },
    {
      rawResult: true,
    }
  );

module.exports = {
  findUsuarioService,
  findUsuarioByIdService,
  createUsuarioService,
  updateUsuarioService,
  deleteUsuarioService,
  addUserEnderecoService,
  removeUserEnderecoService
};
