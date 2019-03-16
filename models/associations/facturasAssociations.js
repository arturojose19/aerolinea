const facturas=require('../facturas');
const personas=require('../personas');

facturas.belongsTo(personas, {
    as: 'documentoComprador',
    foreignKey: 'documentoComprador',
    targetKey: 'documento'
});

module.exports=facturas;