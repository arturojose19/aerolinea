const necesidadMecanica = require('../necesidadMecanica');
const mantenimiento = require('../mantenimiento');

necesidadMecanica.belongsTo(mantenimiento, {
    as: 'codigoMantenimiento',
    foreignKey: 'codigoMantenimiento',
    targetKey: 'codigoMantenimiento'
});

module.exports=necesidadMecanica;
