// RUTAS PARA USUARIOS
const express = require('express');
const router = express.Router();
const verifyToken = require("../auth/verificarToken");
const usuarioController = require('../Controllers/usuarioController');
require("dotenv").config({ path: "variables.env" });



// Api/Usuarios

router.post('/', verifyToken,usuarioController.signup);
router.get('/', verifyToken,usuarioController.listarUsuarios);
router.put('/:id', verifyToken,usuarioController.actualizarUsuario);
router.get('/:id', verifyToken,usuarioController.obtenerUsuario);
router.delete('/:id', verifyToken,usuarioController.eliminarUsuario);
router.post("/signin", usuarioController.signin);




module.exports = router;