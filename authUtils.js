exports.validateToken = (req, res, next) => {
  const token = req.header('Authorization');
  if (!token || token !== 'validToken') {
    return res.status(400).json({ message: 'Authentication failed' });
  }
  next();
};
