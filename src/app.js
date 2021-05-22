const express = require('express');
const cookieParser = require('cookie-parser');
const routes = require('./routes')
const { error404, error500 } = require('./middleware');


const app = express();

app.use(express.json({limit: '300kb'}));
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use('/users', routes);
// app.use('/admin', routes);


// Handling error
app.use(error404);
app.use(error500);

module.exports = app;
