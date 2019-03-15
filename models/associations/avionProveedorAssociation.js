const aviones = require('../aviones');
const proveedores = require('../proveedores');
const avionProveedor = require('../avionProveedor');

avionProveedor.belongsTo(aviones, {
    as: 'idAvion',
    foreignKey: 'idAvion', targetKey: 'id',
})

avionProveedor.belongsTo(proveedores, {
    as: 'codigoProveedor',
    foreignKey: 'codigoProveedor', targetKey: 'codigoProveedor'
})

module.exports=avionProveedor;