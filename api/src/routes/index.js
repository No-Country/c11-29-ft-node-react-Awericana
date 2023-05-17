const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');


const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

const productsRoute = require('./routeProducts')

router.use('/product', productsRoute);

module.exports = router; 
