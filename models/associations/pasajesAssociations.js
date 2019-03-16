const pasajes=require('../pasajes');
const facturas=require('../facturas');
const pasajeros=require('../pasajeros');
const itinerarios=require('../itinerarios');

pasajes.belongsTo(facturas, {
    as:'idFactura',
    foreignKey:'idFactura',
    targetKey: 'idFactura'
});

pasajes.belongsTo(pasajeros, {
    as:'documentoPasajero',
    foreignKey: 'documentoPasajero',
    targetKey: 'documento'
});

pasajes.belongsTo(itinerarios, {
    as:'idItinerario',
    foreignKey:'idItinerario',
    targetKey:'idItinerario'
});

module.exports=itinerarios;