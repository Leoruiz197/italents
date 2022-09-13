const express = require('express');
const router = express.Router();

const produtoController = require('../controllers/produto');
const authMiddleware = require("../middlewares/auth");

router.get('/findAll',authMiddleware, produtoController.findAllProdutoController);
router.get('/find/:id', authMiddleware, produtoController.findProdutoByIdController);

router.post('/create', authMiddleware, produtoController.createProdutoController);
router.post('/addCategoria/:id', authMiddleware, produtoController.addCategoriaProdutoController);

router.put('/update/:id', authMiddleware, produtoController.updateProdutoController);

router.delete('/delete/:id', authMiddleware, produtoController.deleteProdutoController);
router.delete('/removeCategoria/', authMiddleware, produtoController.removeCategoriaProdutoController);

module.exports = router;