const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  sequelize.define('usuario', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    nombre: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    apellido: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false
    },
    rol: {
        type: DataTypes.ENUM("admin", "user"),
        allowNull: false
    },
    resetpasswordcode: {
        type: DataTypes.STRING,
        allowNull: true
    },
    habilitado: {
        type: DataTypes.BOOLEAN,
        allowNull: true
    },
    imagen: {
        type: DataTypes.STRING,
        allowNull: true
    },
    fechaNacimiento: {
        type: DataTypes.DATEONLY,
        allowNull: false
    }
  });
};
