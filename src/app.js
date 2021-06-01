const express = require('express');
const expressLayout = require('express-ejs-layouts');
const path = require('path');
const cookieParser = require('cookie-parser');
const multer = require('multer');
const routes = require('./server/routes/index');
const viewrutas = require('./server/routes/view.rutes');
const morgan = require('morgan');
const { error404, error500 } = require('./server/middleware/index');

const app = express();

app.use(morgan('dev'));

// Setting views configuration
app.set('views', path.join(__dirname,'./server/views'));
app.set('view engine', 'ejs');
app.use(expressLayout);
app.use(express.static(path.join(__dirname,'./public')));

// Settings server configuration 
app.use(express.json({limit: '300kb'}));
app.use(express.urlencoded({ extended: false }));
// app.use(fileUpload()) 
app.use(cookieParser());

// Routers for using server
app.use('/users', routes);
app.use('/admin', routes);
app.use(viewrutas); 


// Handling error
app.use(error404);
app.use(error500);

module.exports = app;
