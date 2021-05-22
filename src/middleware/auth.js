'use strict'
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
        // console.log(token);
        tokens.decodeToken(token)
        .then(response =>{
            req.user = response;
            next();  
        })
        .catch(response =>{
            res.status(response.status);
        });
    }
}