const express = require('express');
const router = express.Router();

const categoriaController = require('../controllers/categoria');

router.get('/findAll', categoriaController.findAllCategoriaController);
router.get('/find/:id', categoriaController.findCategoriaByIdController);
router.post('/create', categoriaController.createCategoriaController);
router.put('/update/:id', categoriaController.updateCategoriaController);
router.delete('/delete/:id', categoriaController.deleteCategoriaController);

module.exports = router;