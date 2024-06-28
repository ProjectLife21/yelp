const pg = require("pg");
const { Client } = pg;

const client = new Client();

const connectDB = async () => {
  return await client.connect();
};

const clientQuery = async (query, args) => {
  return await client.query(query, args);
};

module.exports = { connectDB, clientQuery };
