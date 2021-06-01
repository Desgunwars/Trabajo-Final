'use strict'
const connect = require('../../config/connection');
const encrypt = require('../../subscribers/encript');
const tokens = require('../../subscribers/token');
const {
    getAdmin,
    InsertAdmin,
    getProducts,
    getCategory,
    getProductBebes,
    getProductNiños,
    getProductJovenes,
    getProductAdultos,
    InsertProduct} = require('../../config/querysAdmin');
const connection = require('../../config/connection');
module.exports = {

    async signInAdmin(Admin) {
        return new Promise((resolve, reject) => {
            try {
                let { email, password } = Admin;
                connect.query(getAdmin, [email], (err, resolt) => {
                    if (resolt.length == 0) resolve(false);
                    else {
                        const passwordHash = resolt[0].password;
                        encrypt.comparationPassword(password, passwordHash)
                        .then(comparaton => {
                            if (comparaton == false) {
                                reject(false);
                            } else {
                                resolve({
                                    resolt,
                                    token: tokens.createToken(Admin)
                                });
                            }
                        });
                    }
                });
            } catch (error) {
                reject({
                    status: 500,
                    message: 'Problemas en el servidor'
                });
            }
        });
    },


    async singUpAdmin(Admin) {
        return new Promise((resolve, reject) => {
            try {
                let { email, password } = Admin;
                encrypt.encryptPassword(password).then((hasPasswords) => {
                    connect.query(InsertAdmin, [email, hasPasswords], (err, result) => {
                        if (err) reject(err);
                        else resolve({ token: tokens.createToken(Admin) });
                    });
                });
            } catch (err) {
                reject({
                    status: 500,
                    message: 'Error en la base de datos'
                });
            }
        });
    },

    async uploadProduct({ nombre_p, descripcion_p, nombre ,foto, vr_unitario, cantidad, oferta}) {
        return new Promise((resolve, reject) => {
            try {
                connection.query(getCategory, [nombre],(err, result) =>{
                    const id_categoria = result[0].id_categoria;
                    connection.query(InsertProduct, [id_categoria ,nombre_p, descripcion_p, foto, vr_unitario, cantidad, oferta], (err, result) =>{
                        if(err) reject({status: 500, message: err});
                        else resolve({status: 200})
                    });
                });
            } catch (error) {
                reject({
                    status: 500,
                    message: 'Error al guardar producto en la base de datos'
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
                connection.query(getProductBebes, (err, result) =>{
                    if (err) reject(err);
                    else resolve(result);
                });
            } catch (error) {
                reject({
                    status: 500,
                    message: 'Error en la categoria Bebes'
                })
            }
        });
    },

    async getProductNiños(){
        return new Promise((resolve, reject) =>{
            try {
                connection.query(getProductNiños, (err, result) =>{
                    if (err) reject(err);
                    else resolve(result);
                });
            } catch (error) {
                reject({
                    status: 500,
                    message: 'Error en la categoria Bebes'
                })
            }
        });
    },
    
    async getProductJovenes(){
        return new Promise((resolve, reject) =>{
            try {
                connection.query(getProductJovenes, (err, result) =>{
                    if (err) reject(err);
                    else resolve(result);
                });
            } catch (error) {
                reject({
                    status: 500,
                    message: 'Error en la categoria Bebes'
                })
            }
        });
    },
    
    async getProductAdultos(){
        return new Promise((resolve, reject) =>{
            try {
                connection.query(getProductAdultos, (err, result) =>{
                    if (err) reject(err);
                    else resolve(result);
                });
            } catch (error) {
                reject({
                    status: 500,
                    message: 'Error en la categoria Bebes'
                })
            }
        });
    }
}