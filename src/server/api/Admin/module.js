'use strict'
const userDao = require('./dao');

module.exports = {
    async signInAdmin(Admin) {
        return userDao.signInAdmin(Admin);
    },
    async singUpAdmin(Admin) {
        return userDao.singUpAdmin(Admin);
    },
    // async allProduct() {
    //     return userDao.allProduct();
    // },

    // async uploadProduct(product) {
    //     return userDao.uploadProduct(product);
    // }
}