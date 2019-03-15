const sequelize = require('sequelize');
const dataBase = require('../config/dataBase');

const rutas = dataBase.define('rutas', {
    
    numeroRuta: {
        type: sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
        unique: true,
        autoIncrement: true,
        validate: {
            isNumeric: true,
            notEmpty: true
        }
    },
    
    numeroPistaOrigen: {
        type: sequelize.INTEGER,
        allowNull: false,
        validate: {
            isNumeric: true,
            notEmpty: true
        }
    },

    numeroPistaDestino: {
        type: sequelize.INTEGER,
        allowNull: false,
        validate: {
            isNumeric: true,
            notEmpty: true
        }
    },
    

    precioBase: {
        type: sequelize.FLOAT,
        allowNull: false,
        validate: {
            isNumeric: true,
            notEmpty: true
        }
    }

}, {
    timestamps: false,
    freezeTableName: true
});
module.exports = rutas;