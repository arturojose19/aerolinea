const sequelize = require('sequelize');
const dataBase = require('../config/dataBase');

const aeropuertos = dataBase.define('aeropuertos', {
    IATA: {
        type: sequelize.STRING(3),
        allowNull: false,
        primaryKey: true,
        unique: true,
        validate: {
            isAlpha: true,
            notEmpty: true
        }
    },

    ciudad: {
        type: sequelize.STRING(255),
        allowNull: false,
        references:{
            model: ciudades,
            key: 'ciudad'
        },
        validate: {
            
            isAlpha: true,
            notEmpty: true
        }
    }

}, {
    timestamps: false,
    freezeTableName: true
});
module.exports = aeropuertos;