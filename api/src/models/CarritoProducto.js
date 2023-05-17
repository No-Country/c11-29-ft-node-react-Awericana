const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    sequelize.define('carrito_producto', {
        cantidad: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        imagen:{
            type: DataTypes.STRING,
            allowNull: false,
        }
    },
    {
        timestamps: false
    }
    );
};