import models from '../models';

function constructSelector(attributes) {
  const selector = {
    where: attributes,
    attributes: ['id', 'username'],
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
  } catch (error) {
    res.status(502).json(error);
  }
}

async function createUser(attributes, res, next) {
  try {
    const user = await models.User.create(attributes);
    next(user);
  } catch (error) {
    res.status(502).json(error);
  }
}

async function bindUserRole({
  userId,
  roleIds,
}, res, next) {
  try {
    const attributes = [];
    roleIds.forEach(roleId => attributes.push({
      userId,
      roleId,
    }));
    const result = await models.UserRole.bulkCreate(attributes);
    next(result);
  } catch (error) {
    res.status(502).json(error);
  }
}

async function unbindUserRole(userId, res, next) {
  try {
    await models.UserRole.destroy({
      where: {
        userId,
      },
      raw: true,
    });
    next();
  } catch (error) {
    res.status(502).json(error);
  }
}

export default {
  async getAll(_, res) {
    try {
      const users = await models.User.findAll(constructSelector());
      users.forEach(element => element.roles.forEach(role => delete role.dataValues.UserRoles));
      res.status(200).json(users);
    } catch (error) {
      res.status(502).json(error);
    }
  },

  get(req, res) {
    findUser({
      id: req.params.id,
    }, res, (user) => {
      const normalizedUser = user.toJSON();
      delete normalizedUser.password;
      normalizedUser.roles.forEach(element => delete element.UserRoles);
      res.status(200).json(normalizedUser);
    });
  },

  create(req, res) {
    createUser({
      username: req.body.username,
      password: req.body.password,
    }, res, (user) => {
      const roleIds = req.body.roles || [];
      bindUserRole({
        userId: user.id,
        roleIds,
      }, res, () => {
        res.sendStatus(201);
      });
    });
  },

  async update(req, res) {
    findUser({
      id: req.params.id,
    }, res, async (user) => {
      try {
        await user.update({
          username: req.body.username,
          password: req.body.password,
        });
        unbindUserRole(user.id, res, () => {
          const roleIds = req.body.roles || [];
          bindUserRole({
            userId: user.id,
            roleIds,
          }, res, () => {
            res.sendStatus(200);
          });
        });
      } catch (error) {
        res.status(502).json(error);
      }
    });
  },

  async delete(req, res) {
    try {
      await models.User.destroy({
        where: {
          id: req.params.id,
        },
        raw: true,
      });
      res.sendStatus(200);
    } catch (error) {
      res.status(502).json(error);
    }
  },
};
