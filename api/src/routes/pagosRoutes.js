const { Router } = require("express");
const router = Router();
const { getUrlPago, notificarYConfirmarPago } = require("../controllers/pagosController")




router.get("/url", getUrlPago)


router.post('/notificar', notificarYConfirmarPago)



module.exports = router;
