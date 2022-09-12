const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const UsuarioSchema = new mongoose.Schema({
  nome: { type: String, required: true },
  email: { type: String, unique: true, required: true },
  senha: { type: String, required: true },
  imagem: { type: String, required: true },
  enderecos: [
    { 
      rua:{ type: String, require:true},
      numero:{ type: Number, require:true},
      complemento:{ type: String, require:false},
      CEP:{ type: String, require:true}
    }
  ],
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
  console.log("aqui");
  if(this.senha){
    this.senha = await bcrypt.hash(this.senha, 10);
  }
  next();
});

UsuarioSchema.pre("findOneAndUpdate", async function (next) {
  const docToUpdate = await this.model.findOne(this.getQuery());
  console.log(docToUpdate.senha);
  if (docToUpdate.senha !== this._update.senha) {
    const newPassword = await bcrypt.hash(this._update.senha, 10)
    this._update.senha = newPassword
  }
  console.log(docToUpdate.senha);
  next();
});

const Usuario = mongoose.model("Usuarios", UsuarioSchema);

module.exports = Usuario;
