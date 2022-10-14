// const express = require('express');
// const bcrypt = require('bcrypt');
// const router = express.Router();
// var salt = bcrypt.genSaltSync(10);
// var connection = require('../config/db');
// var response;
// // GET ALL DATA USER
// router.get('/', async (req, res) => {
//     try {
//         connection.DB().connect();
//         connection.DB().query(`SELECT id, name, email FROM users
// ORDER BY id ASC`, function (error, results) {
//             if (error) {
//                 response = {
//                     status: false,
//                     message: error.sqlMessage,
//                 };
//             } else {
//                 response = {
//                     status: true,
//                     message: "Success",
//                     data: results,
//                 };
//             }
//             res.json(response)
//         });
//     } catch (error) {
//         response = {
//             status: false,
//             message: error.message
//         };
//         res.json(response)
//     }
// });

// // CREATE USER
// router.post('/', async (req, res) => {
//     try {
//         const name = req.body.name
//         const email = req.body.email
//         const password = bcrypt.hashSync(req.body.password, salt)
//         if (req.body.password == req.body.confirm_password) {
//             connection.DB().connect()
//             connection.DB().query(`INSERT INTO users (name, email,
//     password) VALUES (?, ?, ?)`, [name, email, password], (error,
//                 results) => {
//                 if (error) {
//                     response = {
//                         status: false,
//                         message: error.sqlMessage,
//                     };
//                 } else {
//                     response = {
//                         status: true,
//                         message: "Created",
//                         data: results.insertId,
//                     };
//                 }
//                 res.json(response)
//             })
//         } else {
//             response = {
//                 status: false,
//                 message: "Password not match"
//             };
//             res.json(response)
//         }
//     } catch (error) {
//         response = {
//             status: false,
//             message: error.message
//         };
//         res.json(response)
//     }
// });

// // DELETE USER
// router.delete('/', async (req, res) => {
//     try {
//         const id = req.body.id
//         connection.DB().connect()
//         connection.DB().query('DELETE FROM users WHERE id = ?', [id],
//             (error, results) => {
//                 if (error) {
//                     response = {
//                         status: false,
//                         message: error.sqlMessage,
//                     };
//                 } else {
//                     response = {
//                         status: true,
//                         message: "Deleted",
//                     };
//                 }
//                 res.json(response)
//             })
//     } catch (error) {
//         response = {
//             status: false,
//             message: error.message
//         };
//         res.json(response)
//     }
// });

// // UPDATE USER
// router.put('/', async (req, res) => {
//     try {
//         const id = req.body.id
//         const name = req.body.name
//         const email = req.body.email
//         connection.DB().connect()
//         connection.DB().query(
//             'UPDATE users SET name = ?, email = ? WHERE id = ?',
//             [name, email, id],
//             (error, results) => {
//                 if (error) {
//                     response = {
//                         status: false,
//                         message: error.sqlMessage,
//                     };
//                 } else {
//                     response = {
//                         status: true,
//                         message: "Updated"
//                     };
//                 }
//                 res.json(response)
//             }
//         )
//     } catch (error) {
//         response = {
//             status: false,
//             message: error.message
//         };
//         res.json(response)
//     }
// });
// module.exports = router;

// Import express
import express from "express";
// Import Controller Product
import { 
    checkEligible,
    validatePhoto,
    // getProductById,
    // createProduct,
    // updateProduct,
    // deleteProduct
 } from "../controllers/customers.js";
 
 // Init express router
const router = express.Router();
 
// Route get check eligible
router.get('/checkEligible', checkEligible);
// Route port validate photo 
router.post('/validatePhoto', validatePhoto);

 
// export router
export default router;