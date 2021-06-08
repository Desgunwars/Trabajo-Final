const userDao = require('./dao');

module.exports ={
    
    async getUser(infoU){
        return userDao.getUser(infoU);
    },

    async createUser(user){
        return userDao.createUser(user)
    },

    async getProductAll(){
        return userDao.getProductAll()
    },
    
    async getProductBebe(){
        return userDao.getProductBebe()
    },

    async getProductNiños(){
        return userDao.getProductNiños()
    },

    async getProductJovenes(){
        return userDao.getProductJovenes()
    },

    async getProductAdultos(){
        return userDao.getProductAdultos()
    },

    async buyProduct(info){
        return userDao.buyProduct(info)
    }
}



