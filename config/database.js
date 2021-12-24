import mysql from "mysql2";
  
// create the connection to database
const db = mysql.createConnection({
  host: process.env.HOST,
  user: process.env.USER,
  password: process.env.SECRET,
  database: process.env.DB
});
 
export default db;