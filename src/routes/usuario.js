const express = require('express');
const router = express.Router();

const usuarioController = require('../controllers/usuario');

router.get('/findAll', usuarioController.findAllUsuarioController);
router.get('/find/:id', usuarioController.findUsuarioByIdController);
router.post('/create', usuarioController.createUsuarioController);
router.put('/update/:id', usuarioController.updateUsuarioController);
router.delete('/delete/:id', usuarioController.deleteUsuarioController);

module.exports = router;