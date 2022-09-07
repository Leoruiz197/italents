const express = require('express');
const router = express.Router();

const produtoController = require('../controllers/produto');

router.get('/findAll', produtoController.findAllProdutoController);
router.get('/find/:id', produtoController.findProdutoByIdController);
router.post('/create', produtoController.createProdutoController);
router.put('/update/:id', produtoController.updateProdutoController);
router.delete('/delete/:id', produtoController.deleteProdutoController);

module.exports = router;