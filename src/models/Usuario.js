const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const UsuarioSchema = new mongoose.Schema({
  nome: { type: String, required: true },
  email: { type: String, unique: true, required: true },
  senha: { type: String, required: true },
  imagem: { type: String, required: true },
  enderecos: [{ type: Array, required: true }],
  createdAt: {type: Date, required: true},
  produtos_fav: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Produtos",
    },
  ],
  admin: { type: Boolean, required: true, default: false },
});

UsuarioSchema.pre("save", async function (next) {
  this.senha = await bcrypt.hash(this.senha, 10);
  next();
});

UsuarioSchema.pre("findOneAndUpdate", async function (next) {
  this.senha = await bcrypt.hash(this.senha, 10);
  console.log(this.senha);
  next();
});

const Usuario = mongoose.model("Usuarios", UsuarioSchema);

module.exports = Usuario;
