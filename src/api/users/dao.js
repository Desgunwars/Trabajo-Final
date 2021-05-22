// Data Access Object = Acceso de Objeto de datos
'use strict'
const connection = require('../../config/connection');
const {
    getEmailSql,
    insertUser} = require('../../config/querys');
const encrypt = require('../../subscribers/encript');
const jwt = require('../../subscribers/token.js');


module.exports = {
    
    async getUser({email, password}){
        return new Promise((resolve, reject) =>{
            connection.query(getEmailSql, [email], (err, resolt) =>{
                if(err) return reject(err);
                if(resolt.length == 0){
                    return resolve(false);
                }else{
                    let passwdHash = resolt[0].password;
                    encrypt.comparationPassword(password, passwdHash).then(compaPasword =>{
                        if(compaPasword == false){
                            return reject(false);
                        }else{
                            return resolve(resolt);
                        };
                    }).catch(err =>{
                        return reject(`La contraseñas no son iguales`);
                    });    
                }
            });
        });
    },


    async createUser(userI){        
        return new Promise((resolve, reject) =>{
            let {user, apellido, nro_ident, fecha_naci, genero, email, password} = userI;
            encrypt.encryptPassword(password).then(hashPassword =>{
                connection.query(insertUser, [user, apellido, nro_ident, fecha_naci, genero, email, hashPassword],(err, result) =>{
                    if(err) return reject(err);
                    else return resolve({ token: jwt.createToken(userI)});
                }); 
            });
        });
    },

    async signIn(){

    }
}
