const sequelize = require('sequelize');
const dataBase = require('../config/dataBase');

const proveedores = dataBase.define('proveedores', {
    codigoProveedor: {
        type: sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        unique: true,
        primaryKey:true,
        validate: {
            isNumeric: true,
            notEmpty: true
        }
    },
    
    proveedor: {
        type: sequelize.STRING(255),
        allowNull: false,
        validate: {
            isAlpha: true,
            notEmpty: true
        }
    },

    tiempoRespuesta: {
        type: sequelize.TIME,
        allowNull: false,
        validate: {
            notEmpty: true
        }
    },

    precio: {
        type: sequelize.FLOAT,
        allowNull: true,
        validate: {
            isNumeric: true,
            notEmpty: true
        }
    }

}, {
    timestamps: false,
    freezeTableName: true
});

module.exports = proveedores;