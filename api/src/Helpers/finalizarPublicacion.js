const { Publicacion } = require("../db.js");
const { notificarCompraVenta } = require("./notificarCompraVenta.js");

const finalizarPublicacion = async (publicacionId, compradorId) => {
  const publicacion = await Publicacion.findByPk(publicacionId);

  if (!publicacion) {
    return res
      .status(404)
      .json(`La publicación con el ID: ${publicacionId} no existe.`);
  }

  const cambios = {
    compradorId,
    estado: "finalizada",
    estadoEntrega: "Empacando",
    fechaCompra : new Date()
  };

  publicacion.update(cambios);

  await notificarCompraVenta(usuarioId, publicacionId);
};

module.exports = {
  finalizarPublicacion,
};
