const { Router } = require("express");
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const fakeRouter = require("../Helpers/fakeGenerator");

const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.use("/fake", fakeRouter);

const productsRoute = require('./producto');
const publicaciones = require('./publicaciones');
const carrito = require('./carrito');
const rutaBaseDeDatos = require('./routeCargaBaseDeDatos')
const tipoProducto = require('./tipoProducto')
const authRouter = require("./auth");
const favoritos = require("./favoritos");
const busquedas = require("./busquedas");
const comentarioRoutes = require("./routeComentario");

router.use("/producto", productsRoute);
router.use("/auth", authRouter);
router.use('/publicaciones', publicaciones);
router.use('/carrito', carrito);
router.use('/cargaBaseDeDatos', rutaBaseDeDatos)
router.use('/tipoDeProducto', tipoProducto)
router.use('/favoritos', favoritos)
router.use('/busqueda', busquedas)
router.use('/comentarios', comentarioRoutes)
module.exports = router;
