const sequelize = require('sequelize');
const dataBase = require('../config/dataBase');

const tripulado = dataBase.define('tripulado', {

}, {
    timestamps: false,
    freezeTableName: true
});

module.exports = tripulado;