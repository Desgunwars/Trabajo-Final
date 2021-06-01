// Data Access Object = Acceso de Objeto de datos
"use strict";
const connection = require("../../config/connection");
const { getUser, insertUser } = require("../../config/querysUsers");
const encrypt = require("../../subscribers/encript");
const tokens = require("../../subscribers/token.js");

module.exports = {
    async getUser(infoU){
        return new Promise((resolve, reject) => {
            try {
                let { email, password } = infoU;
                connection.query(getUser, [email], (err, resolt) =>{
                    if (resolt.length == 0) resolve(false);
                    else {
                        const passwdHash = resolt[0].password;
                        encrypt.comparationPassword(password, passwdHash)
                        .then((compaPasword) => {
                            if (compaPasword == false) {
                                reject(false);
                            } else {
                                resolve({
                                    resolt,
                                    token: tokens.createToken(infoU),
                                });
                            }
                        });
                    }
                });
            } catch (error) {
                reject({
                        status: 500,
                        message: "Usuaro No exite",
                });
            }
        }); 
    },

    async createUser(userI) {
    return new Promise((resolve, reject) => {
        try {
            let { nombre, apellido, nro_ident, genero, email, password } = userI;
            encrypt.encryptPassword(password).then((hashPassword) => {
                connection.query(
                    insertUser,
                    [
                        nombre,
                        apellido,
                        nro_ident,
                        genero,
                        email,
                        hashPassword,
                    ],
                    (err, result) => {
                        if (err) reject(err);
                        else resolve({ status: 200,token: tokens.createToken(userI) });
                    }
                );
            });
        } catch (error) {
            reject({
                status: 500,
                message: "Error en la base de datos",
            });
        }
    });
},
};



// async createUser(userI) {
//     return new Promise((resolve, reject) => {
//         try {
//             let { nombre, apellido, nro_ident, genero, email, password } = bo.userI;
//             encrypt.encryptPassword(password).then((hashPassword) => {
//                 connect.query(
//                     insertUser,
//                     [
//                         nombre,
//                         apellido,
//                         nro_ident,
//                         genero,
//                         email,
//                         hashPassword,
//                     ],
//                     (err, result) => {
//                         if (err) reject(err);
//                         else resolve({ token: tokens.createToken(userI) });
//                     }
//                 );
//             });
//         } catch (error) {
//             reject({
//                 status: 500,
//                 message: "Error en la base de datos",
//             });
//         }
//     });
// },