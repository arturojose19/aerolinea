const tripulado=require('../tripulado');
const vuelos=require('../vuelos');
const empleados=require('../empleados');

tripulado.belongsTo(vuelos, {
    as: 'idVuelo',
    foreignKey: 'idVuelo',
    targetKey: 'idVuelo'
});

tripulado.belongsTo(empleados, {
    as:'idEmpleado',
    foreignKey: 'idEmpleado',
    targetKey: 'documento'
});

module.exports=tripulado;