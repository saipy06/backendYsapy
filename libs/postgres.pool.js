const { Pool } = require('mysql2');

const {config} = require('./../config/config');

const USER = encodeURIComponent(config.dbUser);
const PASSWORD = encodeURIComponent(config.dbPassword);
const URI = `mysql://${USER}:${PASSWORD}@${config.dbHost}:${config.dbPort}/${config.dbName} `;


const pool = new Pool({ connectionString: URI });


module.exports = pool;
