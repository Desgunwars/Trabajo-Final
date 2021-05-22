const bcrypt = require('bcrypt');
const dotenv = require('dotenv');

// dotenv.config({path: '../config/.env'});

module.exports ={
    async encryptPassword(password){
        return await bcrypt.hash(password, 10);
    }, 
    
    async comparationPassword( password, hashPassword ){
        return await bcrypt.compare(password, hashPassword);
    }
}