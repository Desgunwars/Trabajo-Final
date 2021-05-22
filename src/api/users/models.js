const userDao = require('./dao');

module.exports ={
    
    async getUser(infoU){
        return userDao.getUser(infoU);
    },

    async createUser(user){
        return userDao.createUser(user)
    }
}



