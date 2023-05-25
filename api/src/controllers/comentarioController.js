const { Comentario } = require("../db");

async function crearPregunta() {
  const { usuarioPregunta, usuarioRespuesta, pregunta } = req.body;
  try {
    const comentario = await Comentario.create({
      usuarioPregunta: usuarioPregunta,
      usuarioRespuesta: usuarioRespuesta,
      pregunta: pregunta,
    });

    // Devolver el comentario creado
    res.json(comentario);
  } catch (error) {
    // Manejar el error
    res.status(404).json({ error: `Error al crear la pregunta: ${error}` });
  }
}

async function obtenerPreguntasRealizadas() {
  const userid = req.params;
  try {
    const preguntas = await Comentario.findAll({
      where: {
        usuarioPregunta: userid,
      },
    });
    res.json(preguntas);
  } catch (error) {
    res
      .status(404)
      .json({ error: `Error al obtener las preguntas del usuario: ${error}` });
  }
}

async function editarComentario() {
  const { idComentario, nuevosDatos } = req.body;
  try {
    const comentario = await Comentario.update(nuevosDatos, {
      where: { id: idComentario },
      returning: true, // Para que devuelva el comentario actualizado
    });

    if (comentario[0] === 0) {
      throw new Error("El comentario no existe o no se ha modificado.");
    }

    res.json(comentario[1][0]);
  } catch (error) {
    res.status(404).json({ error: `Error al editar el comentario: ${error}` });
  }
}

async function responderComentario() {
  const { idComentario, respuesta } = req.body;
  try {
    const comentario = await Comentario.update(respuesta, {
      where: { id: idComentario },
      returning: true, // Para que devuelva el comentario actualizado
    });

    if (comentario[0] === 0) {
      throw new Error("El comentario no existe o no se ha modificado.");
    }
    res.json(comentario[1][0]);
  } catch (error) {
    res.status(404).json({ error: `Error al editar el comentario: ${error}` });
  }
}

async function obtenerPreguntasRecibidas() {
  const userid = req.params;
  try {
    const respuestas = await Comentario.findAll({
      where: {
        usuarioRespuesta: userid,
      },
    });
    res.json(respuestas);
  } catch (error) {
    res
      .status(404)
      .json({ error: `Error al obtener las respuestas del usuario: ${error}` });
  }
}

module.exports = {
  crearPregunta,
  obtenerPreguntasRealizadas,
  editarComentario,
  responderComentario,
  obtenerPreguntasRecibidas,
};
