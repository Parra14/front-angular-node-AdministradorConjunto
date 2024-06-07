// RUTAS PARA USUARIOS
const express = require('express');
const router = express.Router();
const verifyToken = require("../auth/verificarToken");
const usuarioController = require('../Controllers/usuarioController');
const reservacionController = require('../controllers/reservacionController')
require("dotenv").config({ path: "variables.env" });



// Api/Usuarios

router.post('/crear-usuario/', verifyToken,usuarioController.signup);
router.get('/listar-usuarios/', verifyToken,usuarioController.listarUsuarios);
router.put('/actualizar-usuario/:id', verifyToken,usuarioController.actualizarUsuario);
router.get('/buscar-usuario/:id', verifyToken,usuarioController.obtenerUsuario);
router.delete('/eliminar-usuario/:id', verifyToken,usuarioController.eliminarUsuario);
router.post("/signin/", usuarioController.signin);

//rutas PC
router.post("/create-reservacion", verifyToken, reservacionController.crearReservacion);
router.get("/get-reservacions", verifyToken, reservacionController.obtenerReservacions);
router.get("/get-reservacions/:id", verifyToken, reservacionController.obtenerReservacion);
router.delete("/delete-reservacion/:id", verifyToken, reservacionController.eliminarReservacion);




module.exports = router;