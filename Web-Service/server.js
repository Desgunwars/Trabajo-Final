'use strict'
const http = require('http');
const express = require('express');
const asyncify = require('express-asyncify');
const expressLayout = require('express-ejs-layouts');
const path = require('path');
const app = asyncify(express());
const morgan = require('morgan');
const rutasWeb = require('./router/routers.view');
const port = process.env.PORT || 3030;

app.use(morgan('dev'));
app.set('views', path.join(__dirname, '/views'));
app.set('view engine', 'ejs');

app.use(express.static(path.join(__dirname, '/public')));

app.use(express.json());
app.use(express.urlencoded({ extended: false}));
app.use(expressLayout);

// Router Method Api Web
// app.use('/api', )
// Router Web Render
app.use(rutasWeb.routes);

app.listen(port, () =>{
    console.log(`Server Web on por ${ port }`);
}); 
