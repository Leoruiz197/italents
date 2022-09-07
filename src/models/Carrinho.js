const mongooose = require('mongoose');

const CarrinhoSchema = new mongooose.Schema({
  produtos: [
    {
        type: mongoose.Schema.Types.ObjectId,
        ref:'Produtos',
        quantidade: { type: Number, required: true}
    },
  ],
  dataCompra: { type: Date, required: true },
  precoTotal: { type: Number, required: true },
  frete: { type: Number, required: true },
});

const Carrinho = mongooose.model('Carrinhos', CarrinhoSchema);

module.exports = Carrinho;