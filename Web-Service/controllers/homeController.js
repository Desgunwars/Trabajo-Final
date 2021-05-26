'use strict'

const indexView = (req, res, next) =>{
        res.render('login', {title:'Login', local: 'Tiendio', ape:'Todo'});
    }

module.exports = {
    indexView
}

// const {} = require('api-web')