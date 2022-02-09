const { Posts, User, Categories } = require('../models');

module.exports = async (req, res) => {  
  const posts = await Posts.findAll({
    include: [{ model: Categories, as: 'categories' }, { model: User, as: 'user' }],
    // attributes feito com a ajuda de João Reis, turma 14 - tribo B
    attributes: ['id', 'title', 'content', 'userId', 'published', 'updated'],
  });
  res.status(200).json(posts);
};
