const createError = require('http-errors');

module.exports.error404 = (err, req, res, next) =>{
        next(createError(404));
}

module.exports.error500 = (err, res, req, _next) =>{
        res.locals.message = err.message;
        res.locals.error = req.app.get('env') === 'development' ? err : {};

        res.status(err.status || 500);
        res.send({message : err.message});
}
