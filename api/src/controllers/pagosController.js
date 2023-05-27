const mercadopago = require("mercadopago");
const { obtenerCarrito } = require("./carrito");
const { URL } = process.env;
mercadopago.configure({
  access_token: "APP_USR-4017867997637860-052214-bb4bc3b777174420c8702b0f8df8434b-1380721330",
});

async function getUrlPago(req, res) {
  // const { userId } = req.params;
  
  try {
  //   const carrito = await obtenerCarrito(userId);

  //  if(!carrito) return res.status(404).json({Error:'No se ha encontrado un carrito para el usuario enviado!'})

  //   let items = carrito.productos.map(p =>{
  //     return {
  //         currency_id: "ARS",
  //         title: p.titulo,
  //         unit_price: p.precio,
  //         quantity: 1,
  //         description: p.descripcion,
  //         // picture_url,
  //     }
  //   })


    const result = await mercadopago.preferences.create({
      back_urls: {
        success: `${URL}/pagos/success`,
        pending: `${URL}/pagos/pending`,
        failure: `${URL}/pagos/failure`,
      },
      items: [
        {
          // id,
          // description,
          // picture_url,
          currency_id: "ARS",
          title: "Tablet",
          unit_price: 100,
          quantity: 1,
        },
      ],
      notification_url:
        "https://675e-179-41-169-237.ngrok-free.app/pagos/notificar",
    })


    res.json(result.body.init_point);
  } catch (error) {
    return res.status(500).json({ message: `Algo salio mal: ${error}` });
  }
  
}
 



async function notificarYConfirmarPago(req, res) {
  try {
    const payment = req.query;
    // const body = req.body
    if (payment.type === "payment") {
      const data = await mercadopago.payment.findById(payment["data.id"]);
      // pago rechazado ---> status = rejected
      // pago pagofacil ---> status = pending
      // pago aprobado ---> status = aproved
      switch (data.response.status) {
        case "approved":
          console.log("El estado es 'approved'.");
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
