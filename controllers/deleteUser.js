const { User } = require('../models');

module.exports = async (req, res) => {  
  const user = await User.findOne({
    where: {
      id: req.authUser,
    },
  });
  
  await user.destroy();
  return res.status(204).end();
};