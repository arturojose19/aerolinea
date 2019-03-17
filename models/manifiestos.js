const sequelize = require('sequelize');
const dataBase = require('../config/dataBase');

const manifiestos = dataBase.define('manifiestos', {
    idManifiesto: {
        type: sequelize.INTEGER,
        allowNull: false,
        primaryKey:true,
        autoIncrement: true,
        validate: {
            isNumeric: true,
            notEmpty: true
        }
    }
    
}, {
    timestamps: false,
    freezeTableName: true
});

module.exports = manifiestos;