const mercadopago = require("mercadopago");
const { obtenerCarrito } = require("./carrito");

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
        success: "http://localhost:3001/pagos/success",
        pending: "http://localhost:3001/pagos/pending",
        failure: "http://localhost:3001/pagos/failure",
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
        "http://localhost:3001/pagos/notificar",
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
      console.log(data.response.status);

      // switch(data.response.status)
      // pago rechazado ---> status = rejected
      // pago pagofacil ---> status = pending
      // pago aprobado ---> status = aproved
      console.log('el pago se realizo')
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
