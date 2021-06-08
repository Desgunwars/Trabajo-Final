// Data Access Object = Acceso de Objeto de datos
"use strict";
const connection = require("../../config/connection");
const { getUser, 
        insertUser,
        getProducts,
        getProductBebes,
        getProductNiños,
        getProductJovenes,
        getProductAdultos,
        buyProduct} = require("../../config/querysUsers");
const encrypt = require("../../subscribers/encript");
const tokens = require("../../subscribers/token.js");
const moment = require("moment")

module.exports = {
    async getUser(infoU) {
        return new Promise((resolve, reject) => {
            try {
                let { email, password } = infoU;
                connection.query(getUser, [email], (err, resolt) => {
                    console.log(resolt);
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
                            else resolve({ status: 200, token: tokens.createToken(userI) });
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

    async getProductAll(){
        return new Promise((resolve, reject) =>{
            try {
                connection.query(getProducts,(err, result) =>{
                    if (err) reject(err);
                    else resolve(result);
                });
            } catch (error) {
                reject({
                    status: 500, 
                    message: 'Problemas con la conexcion a la base de datos'
                });
            }
        });
    },
    
    async getProductBebe(){
        return new Promise((resolve, reject) =>{
            try {
                connection.query(getProductBebe,(err, result) =>{
                    if (err) reject(err);
                    else resolve(result);
                });
            } catch (error) {
                reject({
                    status: 500, 
                    message: 'Problemas con la conexcion a la base de datos'
                });
            }
        });
    },
    
    async getProductNiños(){
        return new Promise((resolve, reject) =>{
            try {
                connection.query(getProductNiños,(err, result) =>{
                    if (err) reject(err);
                    else resolve(result);
                });
            } catch (error) {
                reject({
                    status: 500, 
                    message: 'Problemas con la conexcion a la base de datos'
                });
            }
        });
    },
    
    async getProductJovenes(){
        return new Promise((resolve, reject) =>{
            try {
                connection.query(getProductJovenes,(err, result) =>{
                    if (err) reject(err);
                    else resolve(result);
                });
            } catch (error) {
                reject({
                    status: 500, 
                    message: 'Problemas con la conexcion a la base de datos'
                });
            }
        });
    },

    async getProductAdultos(){
        return new Promise((resolve, reject) =>{
            try {
                connection.query(getProductAdultos,(err, result) =>{
                    if (err) reject(err);
                    else resolve(result);
                });
            } catch (error) {
                reject({
                    status: 500, 
                    message: 'Problemas con la conexcion a la base de datos'
                });
            }
        });
    },
    
    async buyProduct(info){
        return new Promise((resolve, reject) =>{
            try {
                
                let year = moment().year();
                let month = moment().month();
                let day = moment().day();
                let {id_producto, id_cliente, precio} = info
                let fullYear = `${year}-${month}-${day}`;
                connection.query(buyProduct, [id_producto, id_cliente, precio,fullYear],(err, result)=>{
                    if(err) reject(err);
                    else resolve(result);
                });
            } catch (error) {
                reject({
                    status: 500,
                    message:'Problemas con la conexcion a la compra'
                });
            }
        });
    },

    
};