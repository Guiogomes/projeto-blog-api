const express = require('express');
const bodyParser = require('body-parser');
const rescue = require('express-rescue');
const { login } = require('../controllers/index');
const { validateLogin } = require('../middlewares/index');

const route = express.Router();
route.use(bodyParser.json());

route.post('/', validateLogin, rescue(login));

module.exports = route;