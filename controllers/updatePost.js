const { Posts, User, Categories } = require('../models');

module.exports = async (req, res) => {
  const { id } = req.params;
  const { title, content } = req.body;

  const post = await Posts.findOne({
    where: { id },
    include: [{ model: Categories, as: 'categories' }, { model: User, as: 'user' }],
    // attributes feito com a ajuda de João Reis, turma 14 - tribo B
    attributes: ['id', 'title', 'content', 'userId', 'published', 'updated'],
  });
  post.set({ title, content });
  await post.save();
  return res.status(200).json(post);
};