var express = require('express');

var router = express.Router();
const cookieParser = require("cookie-parser");
const sessions = require('express-session');
const http = require('http');
var path = require('path');
var parseUrl = require('body-parser');
const app = express();

var mysql = require('mysql');
const { encode } = require('punycode');

let encodeUrl = parseUrl.urlencoded({ extended: false });

var con = require('../database');

router.get('/', (req, res) => {
    res.sendFile(__dirname + '/register.html');
})