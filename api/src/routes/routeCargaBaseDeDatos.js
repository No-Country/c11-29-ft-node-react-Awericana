const { Router } = require("express");
const {
  Talle,
  Color,
  Marca,
  Categoria,
  Pais,
  TipoPersona
} = require("../db.js");

const router = Router();

const { paises } = require("../Helpers/PaisesJson");
const { talles } = require("../Helpers/tallesJson.js");
// const { colores } = require("../Helpers/coloresJson");
const { categorias } = require("../Helpers/categoriasJson");
// const { marcas } = require("../Helpers/marcasJson");
const { tipoPersonas } = require("../Helpers/tipoPersonaJson")
const poblarBaseDeDatos = async () => {
  try {
    await Pais.bulkCreate(paises);
    await Categoria.bulkCreate(categorias);
    // await Color.bulkCreate(colores);
    await Talle.bulkCreate(talles);
    // await Marca.bulkCreate(marcas);
    await TipoPersona.bulkCreate(tipoPersonas)

    // const todosLosTalles = await Talle.findAll();
    // // console.log(todosLosTalles)//
    // const tallesNene = todosLosTalles
    //   .filter((talle) => talle.id <= 5)
    //   .map((talle) => ({ id: talle.id, talleId: talle.id }));

    // await TalleNene.bulkCreate(tallesNene);

    // const tallesHombre = todosLosTalles
    //   .filter((talle) => talle.id >= 3)
    //   .map((talle, index) => ({ id: index + 1, talleId: talle.id }));
    // // console.log(tallesNene)

    // await TalleHombre.bulkCreate(tallesHombre);

    // const tallesDama = todosLosTalles
    //   .filter((talle) => talle.id >= 3)
    //   .map((talle, index) => ({ id: index + 1, talleId: talle.id }));

    // await TalleDama.bulkCreate(tallesDama);
    return true;
  } catch (error) {
    console.log(error.message);
    return false;
  }
};

router.post("/", async (req, res) => {

    if (await poblarBaseDeDatos()){
        return res.status(200).json({ message: "base de datos inicializada" });
    }else {
        return res.status(400).json({ error: "no se pudo cargar" });
    }
  
  
});

module.exports = router;
