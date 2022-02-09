const authToken = require('./authToken');
const error = require('./error');
const validateAuth = require('./validateAuth');
const validateAuthUser = require('./validateAuthUser');
const validateBodyInfo = require('./validateBodyInfo');
const validateId = require('./validateId');
const { validateInfo, validateUser } = require('./validateData');
const validateLogin = require('./loginValidate');
const { validateIfCategoryExist, validateCategoryName } = require('./validateCategory');
const validatePostsInfo = require('./validatePostInfos');
const validateSearchQuery = require('./validateSearchQuery');
const validateUpdateInfos = require('./validateUpdateInfos');

module.exports = {
  authToken,
  error,
  validateAuth,
  validateAuthUser,
  validateBodyInfo,
  validateCategoryName,
  validateId,
  validateIfCategoryExist,
  validateInfo,
  validateLogin,
  validatePostsInfo,
  validateSearchQuery,
  validateUpdateInfos,
  validateUser,
};