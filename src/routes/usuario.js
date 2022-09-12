const express = require('express');
const router = express.Router();

const usuarioController = require('../controllers/usuario');
const authMiddleware = require("../middlewares/auth");

router.get('/findAll', authMiddleware, usuarioController.findAllUsuarioController);
router.get('/find/:id', authMiddleware, usuarioController.findUsuarioByIdController);

router.post('/create', usuarioController.createUsuarioController);
router.post('/addEndereco/:id', authMiddleware, usuarioController.addUserEnderecoController);

router.put('/update/:id', authMiddleware, usuarioController.updateUsuarioController);

router.delete('/delete/:id', authMiddleware, usuarioController.deleteUsuarioController);
router.delete('/removeEndereco/', authMiddleware, usuarioController.removeUserEnderecoController);

module.exports = router;