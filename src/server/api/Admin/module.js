'use strict'
const userDao = require('./dao');

module.exports = {
    async signInAdmin(Admin) {
        return userDao.signInAdmin(Admin);
    },
    async singUpAdmin(Admin) {
        return userDao.singUpAdmin(Admin);
    },
    
    async uploadProduct(product) {
        return userDao.uploadProduct(product);
    },

    async InsertCategory(Category) {
        return userDao.insertCategory(Category);
    },

    async getProductAll(){
        return userDao.getProductAll();
    },

    async getProductBebe(){
        return userDao.getProductBebe()
    },

    async getProductNiños(){
        return userDao.getProductNiños();
    }
}