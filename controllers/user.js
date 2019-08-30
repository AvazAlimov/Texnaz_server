/* eslint-disable no-param-reassign */
import { hashSync } from 'bcrypt';
import models from '../models';

// Function to find users by passing WHERE selector
function find(where, res, next) {
  models.User.findAll({
    where,
    attributes: ['id', 'name', 'username'],
    include: [
      {
        model: models.User,
        as: 'controller',
        attributes: ['id', 'name'],
      },
      {
        model: models.Role,
        as: 'roles',
      },
      {
        model: models.Territory,
        as: 'territory',
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
  })
    // Succeeded: passes result to NEXT function
    .then((items) => {
      items.forEach((element) => {
        if (!element.controller) delete element.dataValues.controller;
        if (!element.territory) delete element.dataValues.territory;

        if (element.provinces.length) {
          element.dataValues.provinces = element.provinces.map(province => province.province);
        } else delete element.dataValues.provinces;

        element.roles.forEach(role => delete role.dataValues.UserRoles);
      });
      next(items);
    })
    // Failed: responses error message with status 502
    .catch(error => res.status(502).json(error));
}

// Function to bind user with roles
async function bindUserRole(roles, userId) {
  // User and Role bindigs
  const userRoles = roles.map(roleId => ({ roleId, userId }));
  // Bind a new created user with specified roles
  await models.sequelize.getQueryInterface().bulkInsert('UserRoles', userRoles);
}

export default {
  // Function to response all users
  getAll(req, res) {
    const where = {};
    if (Object.keys(req.query).length) {
      Object.keys(req.query).forEach((key) => {
        where[key] = req.query[key];
      });
    }
    find(where, res, (items) => {
      res.status(200).json(items);
    });
  },

  // Function to response a user with given id
  get(req, res) {
    find({ id: req.params.id }, res, ([item]) => {
      if (item) res.status(200).json(item);
      else res.sendStatus(404);
    });
  },

  // Function to add a new user
  create(req, res) {
    req.user.password = hashSync(req.user.password, 10);
    // New user insertion
    models.User.create(req.user)
      // Succeeded
      .then(async (user) => {
        // Binding user with roles
        await bindUserRole(req.user.roles, user.id);
        // Respond a successful creation
        res.sendStatus(201);
      })
      // Failed
      .catch(error => res.status(502).json(error));
  },

  // Function to update a specified user
  update(req, res) {
    req.user.password = hashSync(req.user.password, 10);
    // User modification
    models.User.update(req.user, { where: { id: req.params.id } })
      // Succeeded
      .then(async () => {
        // Deletion of all user and role bindings
        await models.UserRole.destroy({ where: { userId: req.params.id }, raw: true });
        // Binding user with roles
        await bindUserRole(req.user.roles, req.params.id);
        // Respond a successful modification
        res.sendStatus(200);
      })
      // Failed
      .catch(error => res.status(502).json(error));
  },

  // Function to delete a specified user
  async delete(req, res) {
    // Deletion of all user and role bindings
    await models.UserRole.destroy({ where: { userId: req.params.id }, raw: true });
    // Deletion of a user
    models.User.destroy({ where: { id: req.params.id } })
      // Succeeded
      .then(() => { res.sendStatus(200); })
      // Failed
      .catch(error => res.status(502).json(error));
  },
};
