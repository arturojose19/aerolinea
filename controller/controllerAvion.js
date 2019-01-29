const sequelize = require('sequelize');
const dataBase = require('../config/dataBase');
const avion = require('../models/avion');

const controller = {};

controller.getAviones = async function (callback) {
    try {
        let response = await Aviones.findAll({
        });
        let aviones = response.map(result => result.dataValues);
        
        callback(aviones, null);
    } catch (error) {
        callback(null, error);
    }
}



module.exports = controller;