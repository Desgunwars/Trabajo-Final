'use strict'
const userModel = require('./models');
const userDto = require('./dto');
const createError = require('http-errors')
const encrypt = require('../../subscribers/encript')

module.exports = {
    
    async User(req, res){
        if(!req.body.email) return res.sendStatus(400);
        if(!req.body.passwd) return res.sendStatus(400);

        const user = await userModel.getUser({
            email: req.body.email,
            password: req.body.passwd
        }).then(result =>{
            return res.send(userDto.mapeo(result, req.user));
        }).catch(err =>{
            err = createError(`El Email/Password no exite`);
            return res.json({ status: err});
        }).catch(err =>{
            return res.status(500).send(`Error on Server Process ${ err }`)
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
        }).catch(err =>{
            err = createError(`En la base de datos exite este usuario`)
            return res.json({status: err });
        });

        const createUser = await userModel.createUser({
            user: req.body.user,
            apellido: req.body.apellido,
            nro_ident: req.body.documento,
            fecha_naci: req.body.fNacimiento,
            genero: req.body.genero,
            email: req.body.email,
            password: req.body.passwd
        }).then(resuld =>{
            return res.status(200).send(resuld);
        }).catch(err =>{
            err = createError(400, `Bad Registeration request `);
            return res.status(err);
        }).catch(err =>{
            return res.status(500).send(`Error on Server Process ${ err }`);
        });
    }, 
    
}
