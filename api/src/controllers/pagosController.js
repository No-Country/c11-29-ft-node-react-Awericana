const mercadopago = require("mercadopago");
const { Usuario_publicacion, Publicacion, Usuario } = require("../db");

mercadopago.configure({
  access_token:
    "APP_USR-4017867997637860-052214-bb4bc3b777174420c8702b0f8df8434b-1380721330",
});

async function getUrlPago(req, res) {
  //   const { userId } = req.params;

  //   let carrito = await Usuario_publicacion.findAll({
  //     include: [Publicacion],
  //     where: { userId },
  //   });

  //   let items = carrito.productos.maps({});

  let preference = {
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
        title: "Mi producto",
        unit_price: 100,
        quantity: 1,
      },
    ],
    notification_url:
      "hasddasdadsok-free.app/pagos/notificar",
  };

  mercadopago.preferences
    .create(preference)
    .then(function (response) {
      res.send(`<a href=${response.body.init_point}> IR A PAGAR </a>`);
    })
    .catch(function (error) {
      console.log(error);
    });
}

async function notificarYConfirmarPago(req, res) {
  const { body, query } = req;
  const topic = query.topic;
  var merchantOrders;
  switch (topic) {
    case "payment":
      const paymentId = query.id;
      // console.log('getting paymentId:', paymentId)
      const payment = await mercadopago.payment.findById(paymentId);
      merchantOrders = await mercadopago.merchant_orders.findById(
        payment.body.order.id
      );
      break;
    case "merchant_order":
      const orderId = query.id;
      console.log("gettin merchant order", orderId);
      merchantOrders = await mercadopago.merchant_orders.findById(orderId);
      break;
  }
  
  console.log(merchantOrders)

  var paidAmount = 0;

  // merchantOrders.body.payments.forEach( payment  => {
  //   if(payment.status === "approved"){
  //       paidAmount += payment.transaction_amount;
  //   }
  // });


  if(paidAmount >= body.total_amount){
    console.log('el pago se completo')
  }else{
    console.log('el pago no se completo')
  }
  res.send('terminado el pago')



  console.log(merchantOrders);
}

module.exports = {
  getUrlPago,
  notificarYConfirmarPago,
};
