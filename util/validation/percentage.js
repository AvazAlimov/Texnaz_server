import { validationResult, checkSchema } from 'express-validator/check';
import models from '../../models';
import exists from '../check';

export const check = checkSchema({
  managerId: {
    isInt: true,
    custom: {
      options: id => exists(models.User, id),
    },
  },
  type: {
    isInt: true,
  },
  start: {
    isString: true,
  },
  end: {
    isString: true,
  },
  min: {
    isFloat: true,
  },
  brands: {
    isArray: true,
    custom: {
      options: (items) => {
        for (let i = 0; i < items.length; i += 1) {
          if (!exists(models.Brand, items[i].brandId)) {
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
    req.percentage = {
      managerId: req.body.managerId,
      type: req.body.type,
      start: req.body.start,
      end: req.body.end,
      min: req.body.min,
      brands: req.body.brands,
    };
    next();
  }
}
