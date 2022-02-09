const express = require('express');
const bodyParser = require('body-parser');
const rescue = require('express-rescue');

const {
authToken,
validateAuth,
validateAuthUser,
validateBodyInfo,
validateId,
validateIfCategoryExist,
validatePostsInfo,
validateSearchQuery,
validateUpdateInfos,
} = require('../middlewares');

const {
createPost,
deletePost,
getAllPosts,
getPostsById,
searchPostByQuery,
updatePost } = require('../controllers');

const route = express.Router();

route.use(bodyParser.json());

route.use(validateAuth);
route.use(authToken);

route.post('/',
validatePostsInfo,
validateIfCategoryExist,
rescue(createPost));
route.get('/', rescue(getAllPosts));
route.get('/search', validateSearchQuery, rescue(searchPostByQuery));
route.get('/:id', validateId, rescue(getPostsById));
route.put('/:id',
validateId,
validateBodyInfo,
validateUpdateInfos,
validateAuthUser,
rescue(updatePost));
route.delete('/:id', validateId, validateAuthUser, rescue(deletePost));

module.exports = route;