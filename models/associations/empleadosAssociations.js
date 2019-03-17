const empleados = require('../empleados');
const personas = require('../personas');

empleados.belongsTo(personas, {
    as:'documento',
    foreignKey: 'documento', 
    targetKey: 'documento'
});

module.exports=empleados;