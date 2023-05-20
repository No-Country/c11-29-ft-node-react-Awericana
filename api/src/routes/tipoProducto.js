const { Router } = require("express");
const { body, param } = require('express-validator');
const { validarCampos } = require("../middlewares/validar-campos");
const {
    // actualizarPublicacion,
    // configurarDescuento,
    crearTipoProducto,
    // eliminarPublicacion,
    // obtenerPublicacion,
    obtenerTipoProducto
} = require("../controllers/tipoProducto");

const router = Router();



router.get('/' , obtenerTipoProducto);

router.post('/', crearTipoProducto)

module.exports = router;