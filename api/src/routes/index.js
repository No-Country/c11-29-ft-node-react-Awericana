const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const fakeRouter = require('../Helpers/fakeGenerator')

const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.use('/fake', fakeRouter)

const productsRoute = require('./routeProducts');
const publicaciones = require('./publicaciones');


router.use('/publicaciones', publicaciones);
router.use('/producto', productsRoute);

module.exports = router; 
