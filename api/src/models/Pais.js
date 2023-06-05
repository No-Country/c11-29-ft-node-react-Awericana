const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('pais', {
    id: {
			type: DataTypes.INTEGER,
			primaryKey: true,
    },
    nombre: {
      type: DataTypes.STRING,
      allowNull: false,
			unique: true
    },
    link: {
      type: DataTypes.STRING,
      allowNull: true,
      defaultValue: null
    }
  });
};
