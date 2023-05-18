const { Router } = require("express");
const { body, param } = require('express-validator');
const { validarCampos } = require("../middlewares/validar-campos");
const {
    actualizarPublicacion,
    configurarDescuento,
    crearPublicacion,
    eliminarPublicacion,
    obtenerPublicacion,
    obtenerPublicaciones
} = require("../controllers/publicaciones");

const router = Router();

router.get('/' ,    obtenerPublicaciones);

router.get('/:id' , obtenerPublicacion);

router.post('/' , [
    body('precio', 'El valor del precio no es valido.').isDecimal().notEmpty(),
    body('titulo', 'El titulo debe tener entre 1 y 50 caracteres').isString().isLength({min:1, max:50}),
    body('descripcion', 'La descripción debe tener entre 10 y 200 caracteres').isString().isLength({min:10, max:200}),
    body('talleId', 'El id del talle no es valido').isInt({min:1}), //a mejorar: debe verificarse que exista en BD
    body('colorId', 'El id del color no es valido').isInt({min:1}), //a mejorar: debe verificarse que exista en BD
    body('tipoProductoId', 'El id del tipoProducto no es valido').isInt({min:1}), //a mejorar: debe verificarse que exista en BD
    body('tipoPersonaId', 'El id del tipoPersona no es valido').isInt({min:1}), //a mejorar: debe verificarse que exista en BD
    body('marcaId', 'El id de marca no es valido').isInt({min:1}), //a mejorar: debe verificarse que exista en BD
validarCampos
], crearPublicacion);

router.put('/:id' , [
    body('precio', 'El valor del precio no es valido.').isDecimal().notEmpty(),
    body('titulo', 'El titulo debe tener entre 1 y 50 caracteres').isString().isLength({min:1, max:50}),
    body('descripcion', 'La descripción debe tener entre 10 y 200 caracteres').isString().isLength({min:10, max:200}),
    body('talleId', 'El id del talle no es valido').isInt({min:1}), //a mejorar: debe verificarse que exista en BD
    body('colorId', 'El id del color no es valido').isInt({min:1}), //a mejorar: debe verificarse que exista en BD
    body('tipoProductoId', 'El id del tipoProducto no es valido').isInt({min:1}), //a mejorar: debe verificarse que exista en BD
    body('tipoPersonaId', 'El id del tipoPersona no es valido').isInt({min:1}), //a mejorar: debe verificarse que exista en BD
    body('marcaId', 'El id de marca no es valido').isInt({min:1}), //a mejorar: debe verificarse que exista en BD
    body('estado', 'El valor del estado debe ser habilitada, pausada o finalizada.').optional().isIn(['habilitada', 'pausada', 'finalizada']),
validarCampos
], actualizarPublicacion);

router.patch('/:id' , [
    body('descuento', 'El valor del descuento no es valido.').optional().isInt({min:1, max:99}),
    validarCampos
], configurarDescuento);

router.delete('/:id' ,  eliminarPublicacion);

module.exports = router;