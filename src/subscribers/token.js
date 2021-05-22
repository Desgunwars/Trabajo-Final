'use strict'
const jwt = require('jwt-simple');
const moment = require('moment');
const config = require('../config/config');

module.exports = {
    async createToken(userI){
        const pyload = {
            sub: userI.Id,
            iat: moment().unix(),
            exp: moment().add(15,'LT').unix(),
        }
        return await jwt.encode(pyload, config.SECRET_TOKEN);
    }
}