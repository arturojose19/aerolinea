const vuelos = require('../vuelos');
const rutas= require('../rutas');
const aviones=require('../aviones');

vuelos.belongsTo(rutas, {
    as:'codigoRuta',
    foreignKey:'codigoRuta',
    targetKey:'numeroRuta'
});

vuelos.belongsTo(aviones,{
    as:'idAvion',
    foreignKey:'idAvion',
    targetKey: 'ID'
});

module.exports=vuelos;