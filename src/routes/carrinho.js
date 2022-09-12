const express = require('express');
const router = express.Router();

const carrinhoController = require('../controllers/carrinho');
const authMiddleware = require("../middlewares/auth");

router.get('/findAll', authMiddleware, carrinhoController.findAllCarrinhoController);
router.get('/find/:id', authMiddleware, carrinhoController.findCarrinhoByIdController);
router.post('/create', authMiddleware, carrinhoController.createCarrinhoController);
router.put('/update/:id', authMiddleware, carrinhoController.updateCarrinhoController);
router.delete('/delete/:id', authMiddleware, carrinhoController.deleteCarrinhoController);

module.exports = router;