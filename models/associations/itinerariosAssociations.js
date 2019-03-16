const itinerarios = require('../itinerarios');
const vuelos = require('../vuelos');

itinerarios.belongsTo(vuelos, {
    as: 'idVuelo',
    foreignKey: 'idVuelo', 
    targetKey: 'idVuelo'
});

module.exports=itinerarios;