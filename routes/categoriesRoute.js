const express = require('express');
const bodyParser = require('body-parser');
const rescue = require('express-rescue');
const {
authToken,
validateAuth,
validateCategoryName,
} = require('../middlewares/index');
const {
createCategory,
getAllCategories,
} = require('../controllers/index');

const route = express.Router();

route.use(bodyParser.json());

route.use(validateAuth);
route.use(authToken);

route.post('/', validateCategoryName, rescue(createCategory));
route.get('/', rescue(getAllCategories));

module.exports = route;