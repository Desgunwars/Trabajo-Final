'use strict'
const userDao = require('./dao');

module.exports = {
    async signInAdmin(Admin){
        return userDao.getUser(Admin);
    },
    async singUpAdmin(Admin){
        return userDao.createUserAdmin(Admin);
    }
}