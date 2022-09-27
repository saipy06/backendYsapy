const { Sequelize } = require('sequelize');

const {config} = require('./../config/config');
const setupModels  = require('./../db/models');

const USER = encodeURIComponent(config.dbUser);
const PASSWORD = encodeURIComponent(config.dbPassword);
const URI = `mysql://${USER}:${PASSWORD}@${config.dbHost}:${config.dpPort}/${config.dbName} `;


const sequelize = new Sequelize(URI, {
  dialect: 'mysql',
  logging: true,
});

setupModels(sequelize);

//sequelize.sync();  // con esto sincroniza y genera los cambios de la base de datos

module.exports = sequelize;
