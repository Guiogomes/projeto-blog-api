const { Posts, User, Categories } = require('../models');

module.exports = async (req, res) => {
  const { id } = req.params;

  const post = await Posts.findOne({
    where: { id },
    include: [{ model: Categories, as: 'categories' }, { model: User, as: 'user' }],
    // attributes feito com a ajuda de João Reis, turma 14 - tribo B
    attributes: ['id', 'title', 'content', 'userId', 'published', 'updated'],
  });
  await post.destroy();
  return res.status(204).end();
};