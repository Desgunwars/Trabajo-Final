'use strict'
const userModel = require('./models');
const userDto = require('./dto');
const createError = require('http-errors');

module.exports = {

    async User(req, res){
        if(!req.body.email) return res.sendStatus(400);
        if(!req.body.passwd) return res.sendStatus(400);

        const user = await userModel.getUser({
            email: req.body.email,
            password: req.body.passwd
        }).then(result =>{
            let { token } = result; 
            result = result.resolt[0];
            console.log(token);
            return res.json(userDto.single(result));
        }).catch(err =>{ 
            console.log(err);
            return res.status(400).send({message:`El Email/Password no exite`});
        }).catch(err =>{
            return res.status(500).send({status: `Error on Server Process ${ err }`})
        });
    },  

    async createUser(req, res){
        if(!req.body.user) return res.sendStatus(400);
        if(!req.body.apellido) return res.sendStatus(400);
        if(!req.body.documento) return res.sendStatus(400);
        if(!req.body.fNacimiento) return res.sendStatus(400);
        if(!req.body.genero) return res.sendStatus(400);
        if(!req.body.email) return res.sendStatus(400);
        if(!req.body.passwd) return res.sendStatus(400);
        
        const validator = await userModel.getUser({
            email: req.body.email,
            password: req.body.passwd
        }).then(createUser =>{
            return userModel.createUser({
                user: req.body.user,
                apellido: req.body.apellido,
                nro_ident: req.body.documento,
                fecha_naci: req.body.fNacimiento,
                genero: req.body.genero,
                email: req.body.email,
                password: req.body.passwd
            });
        }).then(resolve =>{
            console.log(resolve);
            return res.json({status:`El usuario seguiardo de manera exitosa `})
        }).catch(err =>{
            err = createError(`En la base de datos exite este usuario`);
            return res.json({status: err });
        });
    }, 
}
