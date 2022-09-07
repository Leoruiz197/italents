const mongooose = require('mongoose');

const UsuarioSchema = new mongooose.Schema({
  nome: { type: String, required: true },
  email: { type: String, required: true },
  senha: { type: String, required: true },
  imagem: { type: String, required: true },
  enderecos:[
    {type: String, required: true}
  ],
  produtos_fav:[
    {
        type: mongoose.Schema.Types.ObjectId,
        ref:'Produtos'
    }
  ],
  pedidos:[
    {
        type: mongoose.Schema.Types.ObjectId,
        ref:'Pedidos'
    }
  ],
  carrinho:{
    type: mongoose.Schema.Types.ObjectId,
    ref:'Carrinhos'
  },
  admin: {type: Boolean, required: true, default: false }
});

const Usuario = mongooose.model('Usuarios', UsuarioSchema);

module.exports = Usuario;