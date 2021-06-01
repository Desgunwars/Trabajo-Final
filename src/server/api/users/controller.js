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
        if(!req.body.nombre) return res.sendStatus(400);
        if(!req.body.apellido) return res.sendStatus(400);
        if(!req.body.documento) return res.sendStatus(400);
        if(!req.body.genero) return res.sendStatus(400);
        if(!req.body.email) return res.sendStatus(400);
        if(!req.body.passwd) return res.sendStatus(400);
        
        const validator = await userModel.getUser({
            email: req.body.email,
            password: req.body.passwd
        }).then(createUser =>{
            return userModel.createUser({
                nombre: req.body.nombre,
                apellido: req.body.apellido,
                nro_ident: req.body.documento,
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

    async getProductAll(req, res){
        const getProductAll = await userModel
        .getProductAll()
        .then(result =>{
            return res.json(userDto.mapeo(result));
        })
        .catch(err =>{
            return res.json({
                status: 500,
                message: 'Error Al opctener la consulta'
            });
        });
    },

    async getProductBebe(req, res){
        const getProductBebe = await userModel
        .getProductBebe()
        .then(result =>{
            return res.json(userDto.mapeo(result));
        }).catch(err =>{
            return res.json({
                status: 500,
                mensaje: 'Error en la conexcion en la base de datos'
            });
        });
    },

    async getProductNiños(req, res){
        const getProductNiños = await userModel
        .getProductNiños()
        .then(result =>{
            return res.json(userDto.mapeo(result));
        }).catch(err =>{
            return res.json({
                status: 500,
                mensaje: 'Error en la conexcion en la base de datos'
            });
        });
    },

    async getProductJovenes(req, res){
        const getProductNiños = await userModel
        .getProductNiños()
        .then(result =>{
            return res.json(userDto.mapeo(result));
        }).catch(err =>{
            return res.json({
                status: 500,
                mensaje: 'Error en la conexcion en la base de datos'
            });
        });
    },

    async getProductAdultos(req, res){
        const getProductNiños = await userModel
        .getProductNiños()
        .then(result =>{
            return res.json(userDto.mapeo(result));
        }).catch(err =>{
            return res.json({
                status: 500,
                mensaje: 'Error en la conexcion en la base de datos'
            });
        });
    },
}
