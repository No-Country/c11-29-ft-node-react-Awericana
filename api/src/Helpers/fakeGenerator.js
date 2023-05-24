const { faker } = require("@faker-js/faker");
const express = require("express");
const router = express.Router();

const mercadopago = require("mercadopago");
mercadopago.configure({
  access_token:
    "APP_USR-4017867997637860-052214-bb4bc3b777174420c8702b0f8df8434b-1380721330",
});




router.get("/all", (req, res) => {
  const prendas = generarPrendas(20);
  res.json(prendas);
});

router.get("/pagos", (req, res) => {
  let preference = {
    back_urls:{
      success:'http://localhost:3001/fake/pagos/sucess'
    },
    items: [
      {
        title: "Mi producto",
        unit_price: 100,
        quantity: 1,
      },
    ],
    notification_url: 'https://fb2d-179-41-169-237.ngrok-free.app/fake/notificar'
  };

  mercadopago.preferences
    .create(preference)
    .then(function (response) {
      res.send(`<a href=${response.body.init_point}> IR A PAGAR </a>`);

      // En esta instancia deberás asignar el valor dentro de response.body.id por el ID de preferencia solicitado en el siguiente paso
    })
    .catch(function (error) {
      console.log(error);
    });
});

function generarPrendas(cantidad) {
  const publicaciones = [];

  for (let i = 0; i < cantidad; i++) {
    const prenda = {
      nombre: faker.commerce.productName(),
      descripion: faker.commerce.productDescription(),
      talle: faker.helpers.arrayElement(["S", "M", "L", "XL"]),
      color: faker.vehicle.color(),
      marca: faker.commerce.productAdjective(),
      imagen: [
        faker.image.urlLoremFlickr({ category: "fashion" }),
        faker.image.urlLoremFlickr({ category: "fashion" }),
        faker.image.urlLoremFlickr({ category: "fashion" }),
      ],
    };

    const publicacion = {
      fecha: faker.date.anytime(),
      precio: faker.commerce.price(),
      estado: "habilitada",
      user: faker.internet.userName(),
      producto: prenda,
    };

    publicaciones.push(publicacion);
  }

  return publicaciones;
}

router.post('/notificar', (req, res)=>{
  const { body } = req;
  console.log(body)
  res.send({ body});
})
module.exports = router;

// Ejemplo de uso: generar 5 prendas de ropa
