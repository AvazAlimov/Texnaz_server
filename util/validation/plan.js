import { validationResult, checkSchema } from 'express-validator/check';
import models from '../../models';
import exists from '../check';

export const check = checkSchema({
  userId: {
    isInt: true,
    custom: {
      options: id => exists(models.User, id),
    },
  },
  type: {
    isInt: true,
  },
  method: {
    isInt: true,
  },
  start: {
    isString: true,
  },
  end: {
    isString: true,
  },
  total: {
    isFloat: true,
  },
  allBrands: {
    isBoolean: true,
  },
  min: {
    isFloat: true,
  },
  roleId: {
    isInt: true,
  },
  brands: {
    isArray: true,
    custom: {
      options: (items) => {
        for (let i = 0; i < items.length; i += 1) {
          if (!exists(models.Brand, items[i])) {
            return false;
          }
        }
        return true;
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
    req.plan = {
      userId: req.body.userId,
      type: req.body.type,
      method: req.body.method,
      start: req.body.start,
      end: req.body.end,
      roleId: req.body.roleId,
      total: req.body.total,
      allBrands: req.body.allBrands,
      min: req.body.min,
      brands: req.body.brands,
      ranges: req.body.ranges || [],
    };
    next();
  }
}
