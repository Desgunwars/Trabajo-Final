'use strict'
const connect = require('../../config/connection');
const encrypt = require('../../subscribers/encrypt');
const tokens = require('../../subscribers/token');
const {getAdmin,InsertAdmin} = require('../../config/querys');
module.exports = {

    async getUser(Admin){
        new Promise((resolve, reject) =>{
            try {
                let { email, password } =Admin;
                connect.query(getAdmin, [email], (err,resolt) =>{
                    if(err) reject(err);
                    else if(resolt.length == 0) resolve(false);
                    else{
                        const passwordHash = resolt[0].password;
                        encrypt.comparationPassword(password, passwordHash)
                        .then(comparaton =>{
                            if (comparaton) reject(false)
                            resolve({
                                resolt,
                                token: tokens.createToken(Admin)
                            });
                        });
                    }
                });
            } catch (error) {
                
            }
        });
    },


    async createUserAdmin(Admin){
        return new Promise((resolve, reject) =>{
            try {
                let {email, password} = Admin;
                encrypt.encryptPassword(password).then((hasPaswords) =>{
                    connect.query(InsertAdmin, [email, password], (err, result) =>{
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