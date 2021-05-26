'use strict'
    const express = require('express');
    const asyncify = require('express-asyncify');
    const { endpoint, apiToken } = require('../config/config');
    const routes = asyncify(express.Router());

module.exports ={
    routes: routes,
}