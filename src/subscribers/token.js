'use strict'
const jwt = require('jwt-simple');
const moment = require('moment');
const config = require('../config/config');

module.exports = {

    async createToken(userI){
        const payload = {
            sub: userI.id_cliente,
            iat: moment().unix(),
            exp: moment().add(15,'minutes').unix(),
        }
        return await jwt.encode(payload, config.SECRET_TOKEN);
    },
    
    async validationToken(token){
        return await jwt.decode(token, config.SECRET_TOKEN);
    },

    async decodeToken(token){
        return new Promise((resolve, reject) =>{
            try {
                const payload = jwt.decode(token, config.SECRET_TOKEN);
                console.log(payload);
                if(payload.exp <= moment().unix()){
                    reject({
                        status: 401,
                        message: 'El Token ha caducado'
                    })
                }
                
                resolve(payload.sub)
            } catch (error) {
                reject({
                    status: 500,
                    message: 'Invalid Token'
                });
            }
        });

    }
}