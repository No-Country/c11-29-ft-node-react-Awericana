const mercadopago = require("mercadopago");
const { Publicacion, Carrito } = require("../db");
const { finalizarPublicacion } = require("../Helpers/finalizarPublicacion");
const { ACCESS_TOKEN_MP, URL } = process.env;


mercadopago.configure({
  access_token: ACCESS_TOKEN_MP,
});

async function getUrlPago(req, res) {
  const { userid } = req.params;

  const carrito = await Carrito.findAll({
    include: [Publicacion],
    where: { usuarioId: userid },
  });

  if (!carrito)
    return res
      .status(404)
      .json({
        Error: "No se ha encontrado un carrito para el usuario enviado!",
      });
  let carritoMapeado = carrito.map((p) => {
    return {
      currency_id: "ARS",
      title: p.publicacion.titulo,
      unit_price: p.publicacion.precio,
      quantity: 1,
      description: p.publicacion.descripcion,
      // picture_url,
    };
  });

  console.log(carritoMapeado);

  try {
    const result = await mercadopago.preferences.create({
      back_urls: {
        success: `${URL}/pagos/success`,
        pending: `${URL}/pagos/pending`,
        failure: `${URL}/pagos/failure`,
      },
      items: carritoMapeado,
      notification_url: `https://c397-179-41-169-237.ngrok-free.app/pagos/notificar?userid=${userid}`,
    });

    res.json(result.body.init_point);
  } catch (error) {
    return res.status(500).json({ message: "Something goes wrong" });
  }
}

async function notificarYConfirmarPago(req, res) {
  try {
    const payment = req.query;
    console.log(payment.userid);
    const body = req.body;
    if (payment.type === "payment") {
      const data = await mercadopago.payment.findById(payment["data.id"]);
      console.log(data.response.status);
      // pago rechazado ---> status = rejected
      // pago pagofacil ---> status = pending
      // pago aprobado ---> status = aproved
      switch (data.response.status) {
        case "approved":
          console.log("El estado es 'approved'.");

          const carrito = await Carrito.findAll({
            include: [Publicacion],
            where: { usuarioId: payment.userid },
          });

          let carritoIds = carrito.map((p) => {
            return p.publicacion.id;
          });
          for (let i = 0; i < carritoIds.length; i++) {
            finalizarPublicacion(carritoIds[i], payment.userid);
          }
          break;
        case "pending":
          console.log("El estado es 'pending'.");
          break;
        case "rejected":
          console.log("El estado es 'rejected'.");
          break;
        default:
          console.log("Estado desconocido.");
          break;
      }
    }

    res.sendStatus(204);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Something goes wrong" });
  }
}

module.exports = {
  getUrlPago,
  notificarYConfirmarPago,
};
