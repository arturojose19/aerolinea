const pistas = require('../pistas');
const aeropuertos = require('../aeropuertos');

pistas.belongsTo(aeropuertos, {
    as:'aeropuertoIATA',
    foreignKey:'aeropuertoIATA',
    targetKey: 'IATA'
});

module.exports=pistas;