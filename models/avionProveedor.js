const sequelize = require('sequelize');
const dataBase = require('../config/dataBase');

const avionProveedor = dataBase.define('avionProveedor', {
    idAvion: {
        type: sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
        unique: true,
        validate: {
            isNumeric: true,
            notEmpty: true
        }
    },
    
    codigo: {
        type: sequelize.STRING(255),
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

module.exports = avionProveedor;