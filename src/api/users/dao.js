// Data Access Object = Acceso de Objeto de datos

const connection = require('../../config/connection');
const {
    getEmailSql,
    insertUser} = require('../../config/querys');
const encrypt = require('../../subscribers/encript');
// const bcrypt = require('bcrypt');

module.exports = {
    
    async getUser({email, password}){
        return new Promise((resolve, reject) =>{
            connection.query(getEmailSql, [email], (err, resolt) =>{
                if(resolt.length == 0){
                    return reject(false);
                }else{
                    let passwdHash = resolt[0].password;
                    encrypt.comparationPassword(password, passwdHash).then(compaPasword =>{
                        // console.log(compaPasword);
                        if(compaPasword == false){
                            return reject(false);
                        }else{
                            return resolve(resolt);
                        };
                    }).catch(err =>{
                        return reject(`La contraseñas no son iguales`);
                    });    
                }
                // if (err) return reject(err);
                // else{
                // }
            });
        });
    },


    async createUser({user, apellido, nro_ident, fecha_naci, genero, email, password}){
        return new Promise((resolve, reject) =>{
            encrypt.encryptPassword(password).then(hashPassword =>{ 
                connection.query(insertUser, [user, apellido, nro_ident, fecha_naci, genero, email, hashPassword],(err, result) =>{
                    if(err) return reject(err);
                    else return resolve(result);
                }); 
            });
        });
    }


}

// if(err) reject(err);
                // else{
                //     if(resolt.length == 0){
                //         reject(false);
                //     }else{
                //         resolve(resolt);
                //     }
                // }