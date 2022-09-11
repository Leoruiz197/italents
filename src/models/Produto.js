const mongoose = require('mongoose');

const ProdutoSchema = new mongoose.Schema({
  nome: { type: String, unique: true, required: true },
  descricao: { type: String, required: true },
  precoUni: { type: Number, required: true },
  imagem: { type: String, required: true },
  codigoBarra: { type: Number, required: true },
  categoria:[
    {
        type: mongoose.Schema.Types.ObjectId,
        ref:'Categorias'
    }
  ],
});

const Produto = mongoose.model('Produtos', ProdutoSchema);

module.exports = Produto;