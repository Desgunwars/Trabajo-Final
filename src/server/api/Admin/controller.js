"use strict";
const userModel = require("./module");
const userDto = require("./dto")
const { login, adminPanel } = require("../../controller/homeController");

module.exports = {

    async singInAdmin(req, res) {
        console.log(req.body.email);
        if (!req.body.email) return res.sendStatus(400);
        if (!req.body.passwd) return res.sendStatus(400);

        const user = await userModel
            .signInAdmin({
                email: req.body.email,
                password: req.body.passwd,
            })
            .then((result) => {
                let { token } = result;
                result = result.resolt[0];
                return res.redirect("/adminpanel"), res.json(token);
            })
            .catch((err) => {
                return res.json({
                    status: 500,
                    message: "Error en la base de datos",
                });
            });
    },

    async singUpAdmin(req, res) {
        if (!req.body.email) return res.sendStatus(400);
        if (!req.body.passwd) return res.sendStatus(400);

        const validator = await userModel
            .signInAdmin({
                email: req.body.email,
                password: req.body.passwd,
            })
            .then((createUser) => {
                return userModel.singUpAdmin({
                    email: req.body.email,
                    password: req.body.passwd,
                });
            })
            .then((user) => {
                return res.json({
                    status: 200,
                    message: "El usuario se guardo exitosamente",
                });
            })
            .catch((err) => {
                return res.json({
                    status: 400,
                    message: "El usuario ya exite en la base de datos",
                });
            });
    },

    async UploadProduct(req, res) {
        if (!req.body.nameP) return res.sendStatus(400);
        if (!req.body.description) return res.sendStatus(400);
        if (!req.body.nameCategory) return res.sendStatus(400);
        if (!req.body.urlImg) return res.sendStatus(400);
        if (!req.body.valueUnit) return res.sendStatus(400);
        if (!req.body.quatity) return res.sendStatus(400);
        if (!req.body.offer) return res.sendStatus(400);

        const uploadProduct = await userModel
        .uploadProduct({
            nombre_p: req.body.nameP,
            descripcion_p: req.body.description,
            nombre: req.body.nameCategory,
            foto: req.body.urlImg,
            vr_unitario: req.body.valueUnit,
            cantidad: req.body.quatity,
            oferta: req.body.offer,
        })
        .then(result =>{
            return res.json({
                status: 200,
                message: 'El producto se guardo en la base de Datos'
            });
        })
        .catch(err =>{
            return res.json({
                status: 500,
                message: 'Error en la base de datos al guardar el producto'
            });
        });
    },

    async getProductAll(req, res){
        const getProductAll = await userModel
        .getProductAll()
        .then(result =>{
            return res.json(userDto.mapeo(result))
        })
        .catch(err =>{
            return res.json({
                status: 500,
                mensaje: 'Error en la obtencion de los pruductos'
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

};
