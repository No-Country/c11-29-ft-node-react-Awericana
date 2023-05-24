const { Router } = require("express");
const { body, param , query} = require('express-validator');
const { validarCampos } = require("../middlewares/validar-campos");
const { buscar } = require("../controllers/busquedas");

const router = Router();

router.get('/', [
    query('termino', 'Ingrese lo que desee buscar. Maximo 50 caracteres.').isString().isLength({min:1, max: 50}),
    query('precioMin', 'El precio minimo es de 1').optional().isInt({min:1}),
    query('precioMax', 'El precio maximo no puede ser inferior a 1').optional().isInt({min:1}),
    query('oferta', 'El unico valor valido es "si"').optional().isIn('si'),
    query('orden', 'Los valores validos son "asc" y "desc"').optional().isIn(['asc', 'desc']),
    //las siguientes no son definitivas
    query('genero', 'el genero indicado no existe').optional().isInt({min:1}),
    query('categoria', 'la categoria indicada no existe').optional().isInt({min:1}),
    query('talle', 'el talle indicado no existe').optional().isInt({min:1}),
    validarCampos
] , buscar );

module.exports = router;