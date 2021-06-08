const bcrypt = require('bcryptjs');
const config = require('../config/config');



module.exports ={
    async encryptPassword(password){
        return await bcrypt.hash(password, config.BC_SALT);
    }, 
    
    async comparationPassword( password, hashPassword ){
        return await bcrypt.compare(password, hashPassword);
    }
}