'use strict'
const moment = require('moment');
const tokens = require('../subscribers/token');

module.exports = {
    // Se verifica si el token es valido o no
    async isAuth(req, res, next){
        // Valida si hay un token o no
        if(!req.headers.authorization){
            return await res.status(403).send({message:'No tiene permiso para acceder'})
        }

        // Si si hay un token lo convierte en un array y quita el espacio que hay
        // y lo almacena en la primera posicion 
        const token = req.headers.authorization.split(" ")[1];
        const payload = tokens.validationToken(token);

        if(payload.exp <= moment().unix()){
            return await res.status(401).send({ message:'El token ha Caducado '});
        }

        req.user = payload.sub;
        next();
    }
}