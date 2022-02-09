const createCategory = require('./createCategory');
const createPost = require('./createPost');
const deletePost = require('./deletePost');
const deleteUser = require('./deleteUser');
const getAllCategories = require('./getAllCategories');
const getAllPosts = require('./getAllPosts');
const getAllUsers = require('./getAllUsers');
const getPostsById = require('./getPostsById');
const getUserById = require('./getUserById');
const login = require('./login');
const searchPostByQuery = require('./searchPostByQuery');
const token = require('./token');
const updatePost = require('./updatePost');

module.exports = {
  createCategory,
  createPost,
  deletePost,
  deleteUser,
  getAllCategories,
  getAllPosts,
  getAllUsers,
  getPostsById,
  getUserById,
  login,
  searchPostByQuery,
  token,
  updatePost,
};
