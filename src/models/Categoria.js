const mongooose = require('mongoose');

const CategoriaSchema = new mongooose.Schema({
  nome: { type: String, required: true },
});

const Categoria = mongooose.model('Categorias', CategoriaSchema);

module.exports = Categoria;