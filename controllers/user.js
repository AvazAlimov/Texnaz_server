/* eslint-disable no-param-reassign */
import models from '../models';

// Function to find users by passing WHERE selector
function find(where, res, next) {
  models.User.findAll({
    where,
    attributes: ['id', 'name', 'username'],
    include: [{
      model: models.Role,
      as: 'roles',
    }],
  })
    // Succeeded: passes result to NEXT function
    .then((items) => {
      items.forEach(element => element.roles.forEach(role => delete role.dataValues.UserRoles));
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
  getAll(_, res) {
    find(null, res, (items) => {
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
  delete(req, res) {
    // Deletion of a user
    models.User.destroy({ where: { id: req.params.id } })
      // Succeeded
      .then(async () => {
        // Deletion of all user and role bindings
        await models.UserRole.destroy({ where: { userId: req.params.id }, raw: true });
        res.sendStatus(200);
      })
      // Failed
      .catch(error => res.status(502).json(error));
  },
};
