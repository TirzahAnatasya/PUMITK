const mysql = require("mysql2/promise");

const dbConfig = {
  host: "localhost",
  port: 3306,
  user: "root",
  password: "",
  database: "pumitk(db)",
};

const pool = mysql.createPool(dbConfig);

module.exports = pool;