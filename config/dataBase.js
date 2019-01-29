const Sequelize = require("sequelize");
Sequelize.Promise = global.Promise;

const dataBase = new Sequelize('ba6mvek0k9p34fc4hx4t', 'uaqugapfycyczn8o5e4h', 'Q05OiLAtZ21B9gmnkBmL', {
  host: 'ba6mvek0k9p34fc4hx4t-mysql.services.clever-cloud.com',
  dialect: 'mysql',
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
});

dataBase.authenticate()
  .then(() => {
    console.log('Conectado')
  })
  .catch(err => {
    console.log('No se conecto')
  })


module.exports = dataBase;