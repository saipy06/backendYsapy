const {Client } = require('mysql2');

async function getConnection(){
  const client = new Client({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: '051082',
    database: 'webysapy'
  });
  await client.connect();
  return client;
}

module.exports = getConnection;
