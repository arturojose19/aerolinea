const rutas=require('../rutas');
const pistas=require('../pistas');

rutas.belongsTo(pistas, {
    as:'numeroPistaOrigen',
    foreignKey:'numeroPistaOrigen',
    targetKey: 'numeroPista'
});

rutas.belongsTo(pistas, {
    as:'numeroPistaDestino',
    foreignKey:'numeroPistaDestino',
    targetKey: 'numeroPista'
});

module.exports=rutas;