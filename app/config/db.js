// "use strict"
// var mysql = require('mysql');
// var connection;
// module.exports = {
//     DB: function () {
//         connection = mysql.createConnection({
//             host: process.env.DB_HOST,
//             user: process.env.DB_USER,
//             password: process.env.DB_PASS,
//             database: process.env.DB_NAME,
//             port: process.env.DB_PORT,
//         });
//         return connection;
//     }
// };

import { Sequelize } from "sequelize";
import dotenv from "dotenv"
 
dotenv.config();
 
// create connection
const db = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASS, {
    host: process.env.DB_HOST,
    dialect: 'mysql',
    port: process.env.DB_PORT,
});

export default db;