const express = require('express');
const router = express.Router();

const pedidoController = require('../controllers/pedido');
const authMiddleware = require("../middlewares/auth");

router.get('/findAll', authMiddleware, pedidoController.findAllPedidoController);
router.get('/find/:id', authMiddleware, pedidoController.findPedidoByIdController);
router.post('/create', authMiddleware, pedidoController.createPedidoController);
router.put('/update/:id', authMiddleware, pedidoController.updatePedidoController);
router.delete('/delete/:id', authMiddleware, pedidoController.deletePedidoController);

module.exports = router;