const pasajeros = require('../pasajeros');
const personas = require('../personas');

pasajeros.belongsTo(personas, {
    as:'documento',
    foreignKey: 'documento', 
    targetKey: 'documento'
});

module.exports=pasajeros;