const mongoose = require("mongoose");

const UsuarioSchema = new mongoose.Schema({
  nome: { type: String, required: true },
  email: { type: String, unique: true, required: true },
  senha: { type: String, required: true },
  imagem: { type: String, required: true },
  enderecos: [{ type: Array, required: true }],
  produtos_fav: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Produtos",
    },
  ],
  pedidos: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Pedidos",
    },
  ],
  carrinho: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Carrinhos",
  },
  admin: { type: Boolean, required: true, default: false },
});

const Usuario = mongoose.model("Usuarios", UsuarioSchema);

module.exports = Usuario;
