const { Router } = require("express");
const { body, param } = require('express-validator');
const { validarCampos } = require("../middlewares/validar-campos");
const {
    obtenerDirecciones,
    obtenerDireccion,
    crearDireccion,
    modificarDireccion
} = require("../controllers/direccion.js");


const router = Router();

router.get('/', obtenerDirecciones)
router.get('/:id', obtenerDireccion)
router.post('/', crearDireccion)
router.delete('/:id', modificarDireccion)

module.exports = router;