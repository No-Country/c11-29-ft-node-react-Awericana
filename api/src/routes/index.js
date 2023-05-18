const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');


const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

const productsRoute = require('./routeProducts');
const publicaciones = require('./publicaciones');

router.use('/product', productsRoute);
router.use('/publicaciones', publicaciones);

module.exports = router; 
