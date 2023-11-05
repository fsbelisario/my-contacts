const { Client } = require('pg');

const client = new Client({
  host: process.env.BD_HOST,
  port: process.env.BD_PORT,
  user: process.env.BD_USER,
  password: process.env.BD_PASSWORD,
  database: process.env.BD_DATABASE,
});

client.connect();

exports.query = async (query, values) => {
  const { rows } = await client.query(query, values);
  return rows;
};
