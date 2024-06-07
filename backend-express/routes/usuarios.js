// RUTAS PARA USUARIOS
const express = require('express');
const router = express.Router();
const verifyToken = require("../auth/verificarToken");
const usuarioController = require('../Controllers/usuarioController');
require("dotenv").config({ path: "variables.env" });



// Api/Usuarios

router.post('/crear-usuario/', verifyToken,usuarioController.signup);
router.get('/listar-usuarios/', verifyToken,usuarioController.listarUsuarios);
router.put('/actualizar-usuario/:id', verifyToken,usuarioController.actualizarUsuario);
router.get('/buscar-usuario/:id', verifyToken,usuarioController.obtenerUsuario);
router.delete('/eliminar-usuario/:id', verifyToken,usuarioController.eliminarUsuario);
router.post("/signin/", usuarioController.signin);




module.exports = router;