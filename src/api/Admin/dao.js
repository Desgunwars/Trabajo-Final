'use strict'
const connect = require('../../config/connection');
const encrypt = require('../../subscribers/encript');
const tokens = require('../../subscribers/token');
const {getAdmin,InsertAdmin} = require('../../config/querys');
module.exports = {

    async signInAdmin(Admin){
        new Promise((resolve, reject) =>{
            try {
                let { email, password } = Admin;
                connect.query(getAdmin, [email], (err,resolt) =>{
                    if(err) reject(err);
                    else if(resolt.length == 0) resolve(false);
                    else{
                        const passwordHash = resolt[0].password;
                        encrypt.comparationPassword(password, passwordHash)
                        .then(comparaton =>{
                            if (comparaton == false) {
                                reject(false);
                            }else {
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
                    message:'Problemas en el servidor'
                })
            }
        });
    },


    async singUpAdmin(Admin){
        return new Promise((resolve, reject) =>{
            try {
                let {email, password} = Admin;
                encrypt.encryptPassword(password).then((hasPasswords) =>{
                    connect.query(InsertAdmin, [email, hasPasswords], (err, result) =>{
                        if(err) return reject(err);
                        else resolve({token: tokens.createToken(Admin)});
                    });
                });
            }catch(err){
                reject({
                    status: 500,
                    message: 'Error en la base de datos'
                });
            }
        });
    }
}