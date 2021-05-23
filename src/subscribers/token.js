'use strict'
const jwt = require('jwt-simple');
const moment = require('moment');
const config = require('../config/config');

module.exports = {

    async createToken(userI){
        const payload = {
            sub: userI.email,
            password: userI.password,
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
                if(payload.exp <= moment().unix()){
                    reject({
                        status: 401,
                        message: 'El Token ha caducado'
                    });
                }
                let union = [payload.sub, payload.password];
                resolve(union);
            } catch (error) {
                console.log(error);
                reject({
                    status: 500,
                    message: 'Invalid Token'
                });
            }
        });
    }
}