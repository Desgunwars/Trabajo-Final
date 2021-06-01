const express = require('express');
const expressLayout = require('express-ejs-layouts');
const path = require('path');
const morgan = require('morgan');
const {login} = require('./controller/homeController');

const app = express();
app.use(morgan('dev'));

app.set('views', path.join(__dirname,'views'));
app.set('view engine', 'ejs');
app.use(expressLayout);
app.use(express.static(path.join(__dirname,'public')));


app.get('/login', login)

app.listen(3000, () =>{
    console.log('Server on port 3000');
});