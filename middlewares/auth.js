import { verify } from 'jsonwebtoken';

export default (req, res, next) => {
  const { authorization } = req.headers;
  if (authorization) {
    const token = authorization.split(' ')[1];
    verify(token, process.env.JWT_SECRET_KEY, (error, decoded) => {
      if (error) res.sendStatus(401);
      req.userId = decoded.userId;
      next();
    });
  } else { res.sendStatus(401); }
};
