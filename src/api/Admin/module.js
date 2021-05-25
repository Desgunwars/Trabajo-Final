'use strict'
const userDao = require('./dao');

module.exports = {
    async signInAdmin(Admin){
        return userDao.signInAdmin(Admin);
    },
    async singUpAdmin(Admin){
        return userDao.singUpAdmin(Admin);
    }
}