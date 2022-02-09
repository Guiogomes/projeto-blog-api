module.exports = (req, res, next) => {
  const { id } = req.params;
  if (!id) return res.status(400).end();
  next();
};