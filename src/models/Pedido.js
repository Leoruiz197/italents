const mongooose = require('mongoose');

const PedidoSchema = new mongooose.Schema({
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

const Pedido = mongooose.model('Pedidos', PedidoSchema);

module.exports = Pedido;