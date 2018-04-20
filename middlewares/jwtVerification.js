const jwt = require('jsonwebtoken');
const { promisify } = require('util');
const verifyToken = promisify(jwt.verify);
const MY_SECRET = 'secret';

module.exports = (app) => {
  const jwtVerification = async (req, res, next) => {
    if (req.originalUrl !== '/login') {
      const token = req.headers.authentication;
      if (!token) {
        throw new Error('No Authentication Token Provided')
      }
      try {
        const data = await verifyToken(token, MY_SECRET);
        next();
      } catch (e) {
        if (e.message === 'jwt expired')
          res.status(403).json(e)
      }
    } else {
      next();
    }
  }

  app.use(jwtVerification);
}