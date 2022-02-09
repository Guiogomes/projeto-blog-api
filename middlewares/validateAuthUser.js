const { User, Categories, Posts } = require('../models');

module.exports = async (req, res, next) => {
  const { id } = req.params;
  try {
    const post = await Posts.findOne({
      where: { id },
      include: [{ model: Categories, as: 'categories' }, { model: User, as: 'user' }],
      // attributes feito com a ajuda de João Reis, turma 14 - tribo B
      attributes: ['id', 'title', 'content', 'userId', 'published', 'updated'],
    });
    if (!post) return res.status(404).json({ message: 'Post does not exist' });
    if (post.userId !== req.authUser) return res.status(401).json({ message: 'Unauthorized user' });
  } catch (e) {
    next(e);
  }
  next();
};