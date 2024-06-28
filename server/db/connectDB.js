const pg = require("pg");
const { Client } = pg;

const client = new Client({
  user: "postgres",
  host: "localhost",
  database: "yelp",
  password: "acerTest1234!PostSQL",
  port: 5432,
});

const connectDB = async () => {
  return await client.connect();
};

const clientQuery = async (query) => {
  try {
    const result = await client.query(query);
    return result;
  } catch (error) {
    console.error(error);
    return error;
  } finally {
    client.end();
  }
};

module.exports = { connectDB, clientQuery };
