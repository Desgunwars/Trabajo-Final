// Data Access Object = Acceso de Objeto de datos
'use strict'
const connect = require('../../config/connection');
const {
    getEmailSql,
    insertUser} = require('../../config/querys');
const encrypt = require('../../subscribers/encript');
const tokens = require('../../subscribers/token.js');


module.exports = {
    async getUser(infoU){
        return new Promise((resolve, reject) =>{
            try {
                let {email, password} = infoU;
                connect.query(getEmailSql, [email], (err, resolt)=>{
                    if(resolt.length == 0) resolve(false);
                    else{
                            const passwdHash = resolt[0].password;
                            encrypt.comparationPassword(password, passwdHash)
                            .then(compaPasword =>{
                                if(compaPasword == false){
                                    reject(false);
                                }else{
                                    resolve({
                                        resolt,
                                        token: tokens.createToken(infoU)
                                    });
                                };
                            });    
                    }
                });
            } catch (error) {
                reject({
                    status: 500,
                    message: 'Usuaro No exite'  
                });
            }
        });
    },

    async createUser(userI){        
        return new Promise((resolve, reject) =>{
            try {
                let {user, apellido, nro_ident, fecha_naci, genero, email, password} = userI;
                encrypt.encryptPassword(password).then(hashPassword =>{
                    connect.query(insertUser, [user, apellido, nro_ident, fecha_naci, genero, email, hashPassword],(err, result) =>{
                        if(err) reject(err);
                        else resolve({token: tokens.createToken(userI)});
                    }); 
                });
            } catch (error) {
                reject({
                    status:500,
                    message:'Error en la base de datos'
                })
            }
        });
    },

}
