const maletas = require('../maletas');
const pasajes = require('../pasajes');

maletas.belongsTo(pasajes, {
    as: 'idPasaje',
    foreignKey: 'idPasaje',
    targetKey: 'idPasaje'
});

module.exports= maletas;