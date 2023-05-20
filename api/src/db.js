require("dotenv").config();
const { Sequelize } = require("sequelize");
const fs = require("fs");
const path = require("path");
const { DB_USER, DB_PASSWORD, DB_HOST, DB_NAME, URL } = process.env;

const sequelize = new Sequelize(
  `postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/${DB_NAME}`,
  {
    logging: false, // set to console.log to see the raw SQL queries
    native: false, // lets Sequelize know we can use pg-native for ~30% more speed
  }
);

// const sequelize = new Sequelize(URL, {
//   logging: false, // set to console.log to see the raw SQL queries
//   native: false, // lets Sequelize know we can use pg-native for ~30% more speed
// }); //

const basename = path.basename(__filename);

const modelDefiners = [];

// Leemos todos los archivos de la carpeta Models, los requerimos y agregamos al arreglo modelDefiners
fs.readdirSync(path.join(__dirname, "/models"))
  .filter(
    (file) =>
      file.indexOf(".") !== 0 && file !== basename && file.slice(-3) === ".js"
  )
  .forEach((file) => {
    modelDefiners.push(require(path.join(__dirname, "/models", file)));
  });

// Injectamos la conexion (sequelize) a todos los modelos
modelDefiners.forEach((model) => model(sequelize));
// Capitalizamos los nombres de los modelos ie: product => Product
let entries = Object.entries(sequelize.models);
let capsEntries = entries.map((entry) => [
  entry[0][0].toUpperCase() + entry[0].slice(1),
  entry[1],
]);
sequelize.models = Object.fromEntries(capsEntries);

// En sequelize.models están todos los modelos importados como propiedades
// Para relacionarlos hacemos un destructuring
const {
  Categoria,
  Color,
  Imagen,
  Marca,
  Producto,
  Talle,
  Carrito,
  TalleHombre,
  TalleDama,
  TalleNene,
  Publicacion,
  Usuario,
  TipoPersona,
  TipoProducto
} = sequelize.models;

// Aca vendrian las relaciones
// Product.hasMany(Reviews);
//*DEFINIEDO RELACIONES Productos
/*Publicacion.belongsTo(Marca);
Marca.hasMany(Publicacion);*/

Publicacion.belongsTo(Talle);
Talle.hasMany(Publicacion);

Producto.belongsTo(Categoria);
Categoria.hasMany(Producto);

/*Publicacion.belongsTo(Color);
Color.hasMany(Publicacion);*/

Imagen.belongsTo(Publicacion);
Publicacion.hasMany(Imagen);

// Producto.belongsTo(Imagen);
// Imagen.hasMany(Producto);

/*Carrito.belongsToMany(Producto, { through: "carrito_producto" });
Producto.belongsToMany(Carrito, { through: "carrito_producto" });*/
/*
Talle.hasOne(TalleDama, { foreignKey: "talleId" });
Talle.hasOne(TalleHombre, { foreignKey: "talleId" });
Talle.hasOne(TalleNene, { foreignKey: "talleId" });

TalleDama.belongsTo(Talle, { foreignKey: "talleId" });
TalleHombre.belongsTo(Talle, { foreignKey: "talleId" });
TalleNene.belongsTo(Talle, { foreignKey: "talleId" });*/

/*Publicacion.belongsTo(TalleDama);
Publicacion.belongsTo(TalleHombre);
Publicacion.belongsTo(TalleNene);*/
Usuario.hasMany(Publicacion);
Publicacion.belongsTo(Usuario);

Usuario.belongsToMany(Publicacion, {through: 'Usuario_publicacion'});
Publicacion.belongsToMany(Usuario, {through: 'Usuario_publicacion'});
const {Usuario_publicacion} = sequelize.models; 
Usuario_publicacion.belongsTo(Publicacion);
Usuario_publicacion.belongsTo(Usuario);

Talle.hasMany(Publicacion);
Publicacion.belongsTo(Talle);

TipoPersona.hasMany(Publicacion);
Publicacion.belongsTo(TipoPersona);

TipoProducto.hasMany(Publicacion);
Publicacion.belongsTo(TipoProducto);

module.exports = {
  ...sequelize.models, // para poder importar los modelos así: const { Product, User } = require('./db.js');
  conn: sequelize, // para importart la conexión { conn } = require('./db.js');
};
