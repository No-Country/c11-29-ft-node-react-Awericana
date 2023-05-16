const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define("publicacion", {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    fecha: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    precio: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
    estado: {
      type: DataTypes.ENUM("habilitada", "pausada", "eliminada"),
      allowNull: false,
    },
  });
};
