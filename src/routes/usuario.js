const express = require('express');
const router = express.Router();

const usuarioController = require('../controllers/usuario');

router.get('/findAll', usuarioController.findAllUsuarioController);
router.get('/find/:id', usuarioController.findUsuarioByIdController);

router.post('/create', usuarioController.createUsuarioController);
router.post('/addEndereco/:id', usuarioController.addUserEnderecoController);

router.put('/update/:id', usuarioController.updateUsuarioController);

router.delete('/delete/:id', usuarioController.deleteUsuarioController);
router.delete('/removeEndereco/', usuarioController.removeUserEnderecoController);

module.exports = router;