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

    async getProductAll(){
        return userDao.getProductAll();
    },

    async getProductBebe(){
        return userDao.getProductBebe();
    },

    async getProductNiños(){
        return userDao.getProductNiños();
    },
    async getProduct(id){
        return userDao.getProduct(id);
    }, 
    async upgradeProduct(datosUpload){
        return userDao.UpgradeProduct(datosUpload);
    }, 

    async DeleteProduct(id){
        return userDao.DeleteProduct(id);
    },

    async getDesciption(id){
        return userDao.getDesciption(id);
    },

    async updateCategory(description){
        return userDao.UpdateCategory(description);
    },

    async getUser(){
        return userDao.managerUsers();
    },

    async getStartClient(){
        return userDao.clientesStarts();
    }
}