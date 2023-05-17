//                       _oo0oo_
//                      o8888888o
//                      88" . "88
//                      (| -_- |)
//                      0\  =  /0
//                    ___/`---'\___
//                  .' \\|     |// '.
//                 / \\|||  :  |||// \
//                / _||||| -:- |||||- \
//               |   | \\\  -  /// |   |
//               | \_|  ''\---/''  |_/ |
//               \  .-\__  '-'  ___/-. /
//             ___'. .'  /--.--\  `. .'___
//          ."" '<  `.___\_<|>_/___.' >' "".
//         | | :  `- \`.;`\ _ /`;.`/ - ` : | |
//         \  \ `_.   \_ __\ /__ _/   .-` /  /
//     =====`-.____`.___ \_____/___.-`___.-'=====
//                       `=---='
//     ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
const server = require('./src/app.js');
const { conn, Pais, Talle, Color, Categoria, TalleNene, TalleHombre, TalleDama, Marca } = require('./src/db.js');
const { paises } = require('./src/Helpers/PaisesJson.js');
const { talles } = require('./src/Helpers/tallesJson.js');
const { colores } = require('./src/Helpers/coloresJson');
const { categorias } = require('./src/Helpers/categoriasJson');
const { marcas } = require('./src/Helpers/marcasJson')
const { Op } = require("sequelize");

const poblarBaseDeDatos = async () => {
  await Pais.bulkCreate(paises)
  await Categoria.bulkCreate(categorias)
  await Color.bulkCreate(colores)
  await Talle.bulkCreate(talles)
  await Marca.bulkCreate(marcas)

  const todosLosTalles = await Talle.findAll();
  // console.log(todosLosTalles)
  const tallesNene = todosLosTalles
                      .filter(talle => talle.id <= 5)
                      .map(talle => ({id: talle.id, talleId: talle.id}))

  await TalleNene.bulkCreate(tallesNene)

  const tallesHombre = todosLosTalles
                        .filter(talle => talle.id >= 3)
                        .map((talle, index) => ({id: index+1, talleId: talle.id }))
  // console.log(tallesNene)

  await TalleHombre.bulkCreate(tallesHombre)

  const tallesDama = todosLosTalles
                      .filter(talle => talle.id >= 3)
                      .map((talle, index) => ({id: index+1, talleId: talle.id }))

  await TalleDama.bulkCreate(tallesDama)
}
// Syncing all the models at once.
conn.sync({ force: true }).then( () => {

  poblarBaseDeDatos();
  
  server.listen(3001, () => {
    console.log('%s listening at 3001'); // eslint-disable-line no-console
  });
});
