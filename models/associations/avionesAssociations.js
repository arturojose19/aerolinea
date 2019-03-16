const aviones = require('../aviones');
const caracteristicasAviones = require('../caracteristicasAviones');

aviones.belongsTo(caracteristicasAviones, {
    as: 'caracteristicasAviones',
    foreignKey: 'modelo', targetKey: 'modelo',
});

module.exports=aviones;