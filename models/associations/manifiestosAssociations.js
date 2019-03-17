const manifiestos = require('../manifiestos');
const vuelos = require('../vuelos');
const tipoManifiesto = require('../tipoManifiesto');

manifiestos.belongsTo(vuelos, {
    as: 'idVuelo',
    foreignKey: 'idVuelo',
    targetKey: 'idVuelo'
});

manifiestos.belongsTo(tipoManifiesto, {
    as:'codigoManifiesto',
    foreignKey: 'codigoManifiesto',
    targetKey: 'codigoManifiesto'
});

module.exports=manifiestos;