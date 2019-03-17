const sequelize = require('sequelize');
const dataBase = require('../config/dataBase');

const facturas = dataBase.define('facturas', {
    idFactura: {
        type: sequelize.INTEGER,
        allowNull: false,
        primaryKey:true,
        unique: true,
        autoIncrement: true,
        validate: {
            isNumeric: true,
            notEmpty: true
        }
    },
    
    fechaCompra: {
        type: sequelize.DATE,
        allowNull: false,
        validate: {
            notEmpty: true
        }
    },

    temporada: {
        type: sequelize.STRING(1),
        allowNull: false,
        validate: {
            isAlpha: true,
            notEmpty: true
        }
    }
    
}, {
    timestamps: false,
    freezeTableName: true
});

module.exports = facturas;