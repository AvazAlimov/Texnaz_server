import { sign } from 'jsonwebtoken';
import { compareSync } from 'bcryptjs';
import models from '../models';

function constructSelector(attributes) {
  const selector = {
    where: attributes,
    attributes: ['id', 'name', 'username', 'password'],
    include: [
      {
        model: models.User,
        as: 'controller',
        attributes: ['id', 'name'],
      },
      {
        model: models.Role,
        as: 'roles',
        include: [
          {
            model: models.Permission,
            as: 'permissions',
          },
        ],
      },
      {
        model: models.Territory,
        as: 'territory',
        include: [
          {
            model: models.Province,
            as: 'provinces',
          },
        ],
      },
      {
        model: models.UserProvince,
        as: 'provinces',
        include: [
          {
            model: models.Province,
            as: 'province',
            attributes: ['id', 'name'],
          },
        ],
      },
    ],
  };
  return selector;
}

async function findUser(attributes, res, next) {
  try {
    const users = await models.User.findAll(constructSelector(attributes));
    if (users && users[0]) {
      if (!users[0].controller) delete users[0].dataValues.controller;
      if (!users[0].territory) delete users[0].dataValues.territory;

      if (users[0].provinces.length) {
        users[0].dataValues.provinces = users[0].provinces.map(province => province.province);
      } else delete users[0].dataValues.provinces;
      next(users[0]);
    } else res.sendStatus(404);
  } catch (error) { res.status(502).json(error); }
}

export default {
  login(req, res) {
    findUser({ username: req.body.username }, res, (user) => {
      if (compareSync(req.body.password, user.password)) {
        sign({ userId: user.id }, process.env.JWT_SECRET_KEY, { expiresIn: '0.5h' }, (error, token) => {
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
      normalizedUser.roles.forEach((role) => {
        // eslint-disable-next-line no-param-reassign
        role.permissions.forEach(permission => delete permission.RolePermissions);
        // eslint-disable-next-line no-param-reassign
        delete role.UserRoles;
      });
      res.status(200).json(normalizedUser);
    });
  },
};
