const mongoose = require('mongoose');

const CarrinhoSchema = new mongoose.Schema({
  produtos: [
    {
        type: mongoose.Schema.Types.ObjectId,
        ref:'Produtos',
        quantidade: { type: Number, required: true}
    },
  ],
  dataCompra: { type: Date, required: true, default: Date.now },
  precoTotal: { type: Number, required: true },
  frete: { type: Number, required: true },
});

const Carrinho = mongoose.model('Carrinhos', CarrinhoSchema);

module.exports = Carrinho;