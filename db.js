
const mysql = require("mysql2/promise");
const pool = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "YourStrongPass123!",
  database: "badbus",
  port: 4000,
});
module.exports = pool;
