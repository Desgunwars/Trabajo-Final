'use strict'
const userModel = require('./module');

module.exports = {
    async singUpAdmin(req, res){
        if(!req.body.email) return res.sendStatus(400);
        if(!req.body.passwd) return res.sendStatus(400); 
        
        const validator = await userModel.signInAdmin({
            email: req.body.email,
            password: req.body.passwd
        }).then(createUser =>{
            return userModel.singUpAdmin({
                email: req.body.email,
                password: req.body.passwd
            });
        }).then(user =>{
            console.log(user);
            return res.json({ 
                status: 200,
                message: 'El usuario se guardo exitosamente'
            });
        }).catch(err =>{
            return res.json({
                status: 400,
                message: 'El usuario ya exite en la base de datos'
            });
        });
    }
}