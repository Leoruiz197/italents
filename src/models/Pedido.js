const mongoose = require('mongoose');

const PedidoSchema = new mongoose.Schema({
  produtos: [
    {
        id:{type: mongoose.Schema.Types.ObjectId,ref:'produtos'},
        quantidade: { type: Number, required: true}
    },
  ],
  dataCompra: { type: Date, required: true, default: Date.now },
  precoTotal: { type: Number, required: true },
  frete: { type: Number, required: true },
  userId: {type: mongoose.Schema.Types.ObjectId,ref:'usuarios'}
});

const Pedido = mongoose.model('Pedidos', PedidoSchema);

module.exports = Pedido;