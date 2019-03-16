const aeropuertos = require('../aeropuertos');
const ciudades = require('../ciudades');

aeropuertos.belongsTo(ciudades, {
    as: 'ciudad',
    foreignKey: 'ciudad', targetKey: 'ciudad',
});

module.exports=aeropuertos;