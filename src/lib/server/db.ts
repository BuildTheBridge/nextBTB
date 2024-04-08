import mysql, { ConnectionOptions } from "mysql2";

const dbConfig: ConnectionOptions = {
  host: process.env.MYSQL_HOST,
  port: Number(process.env.MYSQL_PORT), // Parse port to number
  user: process.env.MYSQL_USER,
  password: process.env.MYSQL_PASSWORD,
  database: process.env.MYSQL_DATABASE,
  charset: process.env.MYSQL_CHARSET,
};

const connection = mysql.createConnection(dbConfig);

export default connection;
