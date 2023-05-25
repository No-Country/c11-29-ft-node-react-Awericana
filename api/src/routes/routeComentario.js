const { Router } = require("express");
const router = Router();
const {
//   getAllcomments,
  crearPregunta,
  editarComentario,
  responderComentario,
  obtenerPreguntasRecibidas,
  obtenerPreguntasRealizadas,
} = require("../controllers/comentarioController");

router.get("/pregunta/:userid", obtenerPreguntasRealizadas);

router.post("/pregunta/crear", crearPregunta);

router.put("/editar", editarComentario);

router.put("/respuesta", responderComentario);

router.get("/pregunta/recibidas/:userid", obtenerPreguntasRecibidas);

// router.get("/all", getAllcomments);

module.exports = router;