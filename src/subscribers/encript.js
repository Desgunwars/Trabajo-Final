const bcrypt = require('bcrypt');
const config = require('../config/config');



module.exports ={
    async encryptPassword(password){
        // console.log(config.BC_SALT);
        return await bcrypt.hash(password, config.BC_SALT);
    }, 
    
    async comparationPassword( password, hashPassword ){
        return await bcrypt.compare(password, hashPassword);
    }
}