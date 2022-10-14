//'use strict';
// Import connection
import db from "./config/db.js";
import Router from "./routes/route.js";
import express from "express";
import cors from "cors";
import dotenv from "dotenv"
 
dotenv.config();

const app = express();

const PORT = process.env.PORT;
const HOST = process.env.HOST;
console.log(process.env.PORT)
app.use(cors());
app.use(express.json());

try {
  await db.authenticate();
  console.log('Connection has been established successfully.');
} catch (error) {
  console.error('Unable to connect to the database:', error);
}

app.use(Router);
app.listen(PORT, HOST);