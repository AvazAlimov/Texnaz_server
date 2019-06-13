import { validationResult, checkSchema } from 'express-validator/check';
import models from '../../models';

export const check = checkSchema({
  name: {
    isString: true,
  },
  username: {
    isString: true,
  },
  password: {
    isString: true,
  },
  roles: {
    isArray: true,
    custom: {
      options: async (roles) => {
        if (!roles) return false;
        const promises = [];
        roles.forEach((roleId) => { promises.push(models.Role.findByPk(roleId)); });
        const results = await Promise.all(promises);
        return !results.includes(null);
      },
    },
  },
});

export function validate(req, res, next) {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    res.status(403).json({
      errors: errors.array(),
    });
  } else {
    req.user = {
      name: req.body.name,
      username: req.body.username,
      password: req.body.password,
      roles: req.body.roles,
    };
    next();
  }
}
