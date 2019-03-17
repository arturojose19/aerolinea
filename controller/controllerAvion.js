const sequelize = require('sequelize');
sequelize.Promise = global.Promise
const dataBase = require('../config/dataBase');
const avion = require('../models/associations/avionesAssociations');
const caracteristicasAviones = require('../models/caracteristicasAviones');

const controller = {};

controller.getAviones = async function (callback) {
    dataBase.sync();
    try {
        let response = await avion.findAll({
            include:[{
                model: caracteristicasAviones,
                as: 'caracteristicasAviones',
                required: true
            }]
        });
        let aviones = response.map(result => result.dataValues);
        console.log(aviones);
        callback(aviones, null);
    } catch (error) {
        console.log('se va pal catch');
        console.log(error);
        callback(null, error);
    }
}

controller.createAvion = async function (data) {
    
    console.log(data.ID, data.modelo, data.Estado, 7);
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
            modelo:data.modelo
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