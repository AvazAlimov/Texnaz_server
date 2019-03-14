import { sign } from 'jsonwebtoken';
import { compareSync } from 'bcrypt';
import models from '../models';

function constructSelector(attributes) {
  const selector = {
    where: attributes,
    attributes: ['id', 'username', 'password'],
    include: [{
      model: models.Role,
      as: 'roles',
    }],
  };
  return selector;
}

async function findUser(attributes, res, next) {
  try {
    const users = await models.User.findAll(constructSelector(attributes));
    if (users && users[0]) next(users[0]);
    else res.sendStatus(404);
  } catch (error) { res.status(502).json(error); }
}

export default {
  login(req, res) {
    findUser({ username: req.body.username }, res, (user) => {
      if (compareSync(req.body.password, user.password)) {
        sign({ userId: user.id }, process.env.JWT_SECRET_KEY, {}, (error, token) => {
          if (error) res.status(502).json(error);
          res.status(200).json({ token });
        });
      } else res.sendStatus(401);
    });
  },

  getUserDetails(req, res) {
    findUser({ id: req.userId }, res, (user) => {
      const normalizedUser = user.toJSON();
      delete normalizedUser.password;
      // eslint-disable-next-line no-param-reassign
      normalizedUser.roles.forEach(element => delete element.UserRoles);
      res.status(200).json(normalizedUser);
    });
  },
};
