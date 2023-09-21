const { Pool } = require("pg");

const pool = new Pool({
  user: "labber",
  password: "labber",
  host: "localhost",
  database: "lightbnb",
});

const query = (text, params) => {
  return pool.query(text, params);
};

module.exports = {query};