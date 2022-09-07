const express = require('express');
const router = express.Router();

const carrinhoController = require('../controllers/carrinho');

router.get('/find/:id', carrinhoController.findCarrinhoByIdController);
router.post('/create', carrinhoController.createCarrinhoController);
router.put('/update/:id', carrinhoController.updateCarrinhoController);
router.delete('/delete/:id', carrinhoController.deleteCarrinhoController);

module.exports = router;