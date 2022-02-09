const express = require('express');
const bodyParser = require('body-parser');
const rescue = require('express-rescue');

const {
getAllUsers,
token,
getUserById,
deleteUser,
} = require('../controllers/index');
const {
authToken,
validateAuth,
validateInfo,
validateId,
validateUser,
} = require('../middlewares/index');

const route = express.Router();

route.use(bodyParser.json());

route.post('/', validateInfo, validateUser, rescue(token));

route.use(validateAuth);
route.use(authToken);

route.get('/', rescue(getAllUsers));
route.get('/:id', validateId, rescue(getUserById));
route.delete('/me', rescue(deleteUser));

module.exports = route;