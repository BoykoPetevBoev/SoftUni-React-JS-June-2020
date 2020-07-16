const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const cors = require('cors');
const secret = 'secret';

module.exports = (app) => {
    app.use(cors());
    app.use(cookieParser(secret));
    app.use(express.static('static'));
    app.use(express.json());
    app.use(bodyParser.urlencoded({
        extended: true
    }));
};