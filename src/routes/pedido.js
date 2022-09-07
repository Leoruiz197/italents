const express = require('express');
const router = express.Router();

const pedidoController = require('../controllers/pedido');

router.get('/findAll', pedidoController.findAllPedidoController);
router.get('/find/:id', pedidoController.findPedidoByIdController);
router.post('/create', pedidoController.createPedidoController);
router.put('/update/:id', pedidoController.updatePedidoController);
router.delete('/delete/:id', pedidoController.deletePedidoController);

module.exports = router;