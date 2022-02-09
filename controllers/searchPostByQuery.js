const { Op } = require('sequelize');
const { Posts, User, Categories } = require('../models');

module.exports = async (req, res) => {
  const { q } = req.query;
  
  const post = await Posts.findAll({
    where: { 
      [Op.or]: [
        { title: { [Op.like]: q } },
        { content: { [Op.like]: q } },
      ],
    },
    include: [{ model: Categories, as: 'categories' }, { model: User, as: 'user' }],
    // attributes feito com a ajuda de João Reis, turma 14 - tribo B
    attributes: ['id', 'title', 'content', 'userId', 'published', 'updated'],
  });
  if (post.length === 0) return res.status(200).json([]);
  return res.status(200).json(post);
};