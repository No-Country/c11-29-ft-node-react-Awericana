const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    sequelize.define('carrito', {
        id: {
            type:DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        precioTotal: {
            type: DataTypes.INTEGER,
            allowNull: false,
        }
    },
    {
        timestamps: false
    }
    );
};