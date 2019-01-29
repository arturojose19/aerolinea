const sequelize = require('sequelize');
sequelize.Promise = global.Promise
const dataBase = require('../config/dataBase');
const avion = require('../models/aviones');

const controller = {};

controller.getAviones = async function (callback) {
    try {
        let response = await avion.findAll({
        });
        let aviones = response.map(result => result.dataValues);
        console.log(aviones);
        callback(aviones, null);
    } catch (error) {
        callback(null, error);
    }
}

controller.createAvion = async function (data) {
    
    console.log(data.ID, data.Modelo, data.Estado, 7);
    avion.create(data);

};

controller.deleteAvion = async function (ID, callback) {
    try {
        let response = await avion.destroy(
         {
            where: {
                ID
            }
        });
        callback(null);
    } catch (error) {
        callback(error);
    }
};

controller.updateAvion = async function (data, callback) {
    try {
        let response = await avion.update( {
            Estado:data.Estado,
            Modelo:data.Modelo
        },
         {
            where: {
                ID:data.ID
            }
        });
        callback(null);
    } catch (error) {
        callback(error);
    }
}


module.exports = controller;