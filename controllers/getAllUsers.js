const { User } = require('../models');

module.exports = async (req, res) => {  
  const users = await User.findAll();
  return res.status(200).json(users); 
};