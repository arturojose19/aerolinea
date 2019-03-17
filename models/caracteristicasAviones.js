const sequelize = require('sequelize');
const dataBase = require('../config/dataBase');

const caracteristicasAviones = dataBase.define('caracteristicasAviones', {
    
    modelo: {
        type: sequelize.STRING(255),
        allowNull: false,
        primaryKey: true,
        unique: true,

        validate: {
            isAlpha: true,
            notEmpty: true
        }
    },
    
    fabricante: {
        type: sequelize.STRING(255),
        allowNull: false,

        validate: {
            notEmpty: true
        }
    },
    
    cargaMaximaEquipaje: {
        type: sequelize.FLOAT,
        allowNull: false,
        validate: {
            isNumeric: true,
            notEmpty: true
        }
    },

    cargaMaximaCabina: {
        type: sequelize.FLOAT,
        allowNull: false,
        validate: {
            isNumeric: true,
            notEmpty: true
        }
    },

    velocidadMaxima: {
        type: sequelize.FLOAT,
        allowNull: false,
        validate: {
            isNumeric: true,
            notEmpty: true
        }
    },

    velocidadCrucero: {
        type: sequelize.FLOAT,
        allowNull: false,
        validate: {
            isNumeric: true,
            notEmpty: true
        }
    },

    cantidadBaños: {
        type: sequelize.INTEGER,
        allowNull: false,
        validate: {
            isNumeric: true,
            notEmpty: true
        }
    },

    pesoVacio: {
        type: sequelize.FLOAT,
        allowNull: false,
        validate: {
            isNumeric: true,
            notEmpty: true
        }
    },

    pesoMaximo: {
        type: sequelize.FLOAT,
        allowNull: false,
        validate: {
            isNumeric: true,
            notEmpty: true
        }
    },

    salidasDeEmergencia: {
        type: sequelize.INTEGER,
        allowNull: false,
        validate: {
            isNumeric: true,
            notEmpty: true
        }
    },

    tripulacionNecesaria: {
        type: sequelize.INTEGER,
        allowNull: false,
        validate: {
            isNumeric: true,
            notEmpty: true
        }
    },

    tipoDeCombustible: {
        type: sequelize.STRING(255),
        allowNull: false,

        validate: {
            notEmpty: true
        }
    },

    litrosDeCombustible: {
        type: sequelize.FLOAT,
        allowNull: false,
        validate: {
            isNumeric: true,
            notEmpty: true
        }
    },

    internet: {
        type: sequelize.BOOLEAN,
        allowNull: false,
        validate: {
            notEmpty: true
        }
    },

    tv: {
        type: sequelize.BOOLEAN,
        allowNull: false,
        validate: {
            notEmpty: true
        }
    },

    equipoMedico: {
        type: sequelize.BOOLEAN,
        allowNull: false,
        validate: {
            notEmpty: true
        }
    },

    distanciaDeDespegueConCargaMaxima: {
        type: sequelize.FLOAT,
        allowNull: false,
        validate: {
            isNumeric: true,
            notEmpty: true
        }
    },

    asientosEconomicos: {
        type: sequelize.INTEGER,
        allowNull: false,
        validate: {
            isNumeric: true,
            notEmpty: true
        }
    },

    asientosPrimeraClase: {
        type: sequelize.INTEGER,
        allowNull: false,
        validate: {
            isNumeric: true,
            notEmpty: true
        }
    }


}, {
    timestamps: false,
    freezeTableName: true
});

module.exports = caracteristicasAviones;