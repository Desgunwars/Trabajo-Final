"use strict";
const userModel = require("./module");

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
            // console.log(token);
            return res.json({ status : 200 ,message: "esta conectado" });
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
            // console.log(user);
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

    async getProduct(req, res) {
        const getProduct = await userModel.getProduct().then((result) => { });
    },

    async UploadProduct(req, res) { 
        if (!req.body.nameP) return res.sendStatus(400);
        if (!req.body.description) return res.sendStatus(400);
        if (!req.body.image) return res.sendStatus(400);
        if (!req.body.valueUnit) return res.sendStatus(400);
        if (!req.body.quatity) return res.sendStatus(400);
        if (!req.body.offer) return res.sendStatus(400);

        const UploadProduct = uploadProduct({
            nombre: req.body.nameP,
            descripcion: req.body.description,
            foto: req.body.image,
            vr_unitario: req.body.valueUnit,
            cantidad: req.body.quatity,
            oferta: req.body.offer
        }).then((result) => {
            console.log(result);
        }).catch(err =>{
            console.log(err);
        })
    },
};
