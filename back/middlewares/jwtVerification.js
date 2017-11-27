const jwt = require('jsonwebtoken');
const { promisify } = require('util');
const verifyToken = promisify(jwt.verify);
const MY_SECRET = 'secret';

module.exports = (app) => {
  const jwtVerification = async (req, res, next) => {
    if (req.originalUrl !== '/login') {
      if (!req.headers.bearer) {
        throw new Error('No Authentication Token Provided')
      }
      const token = req.headers.bearer;
      try {
        const data = await jwt.verify(token, MY_SECRET);
        next();
      } catch (e) {
        if (e.message === 'jwt expired')
          res.status(400).json(e)
      }
    } else {
      next();
    }
  }

  //app.use(jwtVerification);
}