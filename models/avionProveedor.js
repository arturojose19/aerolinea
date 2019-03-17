const sequelize = require('sequelize');
const dataBase = require('../config/dataBase');

const avionProveedor = dataBase.define('avionProveedor', {

}, {
    timestamps: false,
    freezeTableName: true
});

module.exports = avionProveedor;