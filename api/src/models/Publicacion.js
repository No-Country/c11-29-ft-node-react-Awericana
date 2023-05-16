const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define("publicacion", {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    date: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    price: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
    status: {
      type: DataTypes.ENUM("habilitada", "pausada", "eliminada"),
      allowNull: false,
    },
  });
};
