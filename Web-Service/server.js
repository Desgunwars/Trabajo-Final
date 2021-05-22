const http = require('http');
const express = require('express');
const asyncify = require('express-asyncify');
const path = require('path');
const app = asyncify(express());
const morgan = require('morgan');

app.use(express.static(path.join(__dirname, 'public')));
app.use(morgan('dev'));
app.use('/', )
