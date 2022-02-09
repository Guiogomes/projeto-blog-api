const { Posts } = require('../models');
const { PostsCategories } = require('../models');

module.exports = async (req, res) => {
  const { title, categoryIds, content } = req.body;
  const post = await Posts.create({ userId: req.authUser, title, content });
  await PostsCategories.create({ postId: post.dataValues.id, categoryId: categoryIds });
  const jsonPost = { id: post.dataValues.id, userId: req.authUser, title, content };
  return res.status(201).json(jsonPost);
};