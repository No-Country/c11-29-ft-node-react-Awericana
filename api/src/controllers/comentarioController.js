const { Comentario } = require("../db");

async function crearPregunta(req, res) {
  const { usuarioPregunta, usuarioRespuesta, pregunta } = req.body;
  console.log(usuarioPregunta, usuarioRespuesta, pregunta);
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

async function obtenerPreguntasRealizadas(req, res) {
  const { userid } = req.params;
  try {
    console.log(userid);
    console.log(typeof userid);
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

async function editarComentario(req, res) {
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

async function responderComentario(req, res) {
  const { idComentario, respuesta } = req.body;
  try {
    // const comentario = await Comentario.update(respuesta, {
    //   where: { id: idComentario },
    //   returning: true, // Para que devuelva el comentario actualizado
    // });
    // console.log( idComentario, respuesta)
    // const comentario = await Comentario.update(
    //   { [respuesta]: respuesta },
    //   {
    //     where: {
    //       id: idComentario,
    //     },
    //     fields: [respuesta],
    //   }
    // );

    if(!idComentario || !respuesta) return res.status(404).json('Faltan datos')

    const [numFilasActualizadas] = await Comentario.update(
      { respuesta: respuesta },
      {
        where: {
          id: idComentario,
        },
      }
    );

    if (numFilasActualizadas === 0) {
      console.log("El comentario no existe o no se ha modificado.");
      return res.status(404).json({ error: "El comentario no existe o no se ha modificado." });
    }

    const comentarioActualizado = await Comentario.findByPk(idComentario);

    res.json(comentarioActualizado);
    // if (comentario[0] === 0) {
    //   console.log("El comentario no existe o no se ha modificado.");
    // }
    // res.json(comentario[1][0]);
  } catch (error) {
    res.status(404).json({ error: `Error al editar el comentario: ${error}` });
  }
}

async function obtenerPreguntasRecibidas(req, res) {
  const { userid } = req.params;
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
