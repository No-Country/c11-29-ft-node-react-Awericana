const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define(
    "comentario",
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      usuarioPregunta: {
        type: DataTypes.STRING,
      },
      usuarioRespuesta: {
        type: DataTypes.STRING,
      },
      pregunta: {
        type: DataTypes.STRING,
      },
      respuesta: {
        type: DataTypes.STRING,
      },
    },
    {
      timestamps: false,
    }
  );
};
