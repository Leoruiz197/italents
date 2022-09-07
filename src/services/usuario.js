const Usuario = require("../models/Usuario");

const findUsuarioService = () => {
  return "";
};

const findUsuarioByIdService = () => {
  return "";
};

const createUsuarioService = async (body) => {
  return await Usuario.create(body);
};

const updateUsuarioService = () => {
  return "";//{ returnDocument: "after" }
};

const deleteUsuarioService = () => {
  return "";
};

module.exports = {
  findUsuarioService,
  findUsuarioByIdService,
  createUsuarioService,
  updateUsuarioService,
  deleteUsuarioService,
};
