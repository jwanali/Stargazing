// PG database client/connection setup
const pg = require("pg");
const ENV = require('../environment');
const client = new pg.Client({
  host: process.env.PGHOST,
  name: process.env.PGDATABASE,
  user: process.env.PGUSER,
  password: process.env.PGPASSWORD,
  port: process.env.PGPORT,
  ssl: process.env.DATABASE_URL ? { rejectUnauthorized: false } : false
});

client
  .connect()
  .catch(e => console.log(`Error connecting to Postgres server:\n${e}`));

module.exports = client;


// const { Pool } = require('pg');

// const dbParams = {
//   host: process.env.DB_HOST,
//   port: process.env.DB_PORT,
//   user: process.env.DB_USER,
//   password: process.env.DB_PASS,
//   database: process.env.DB_NAME
// };

// const db = new Pool(dbParams);

// const query = function (text, params, callback) {
//   return db.query(text, params, callback);
// };

// module.exports = { query };