const express = require('express');
const router = express.Router();

const categoriaController = require('../controllers/categoria');
const authMiddleware = require("../middlewares/auth");

router.get('/findAll', authMiddleware, categoriaController.findAllCategoriaController);
router.get('/find/:id', authMiddleware, categoriaController.findCategoriaByIdController);
router.post('/create', authMiddleware, categoriaController.createCategoriaController);
router.put('/update/:id', authMiddleware, categoriaController.updateCategoriaController);
router.delete('/delete/:id', authMiddleware, categoriaController.deleteCategoriaController);

module.exports = router;