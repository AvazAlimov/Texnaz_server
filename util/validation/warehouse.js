import { validationResult, checkSchema } from 'express-validator/check';
import models from '../../models';
import exists from '../check';

export function validate(req, res, next) {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    res.status(403).json({
      errors: errors.array(),
    });
  } else {
    req.warehouse = {
      name: req.body.name,
      totalPrice: 0.0,
      company: req.body.company,
      provinceId: req.body.provinceId,
      ownerId: req.body.ownerId,
      type: req.body.type,
    };
    next();
  }
}

export const check = checkSchema({
  name: {
    isString: true,
  },
  company: {
    isString: true,
  },
  provinceId: {
    isInt: true,
  },
  ownerId: {
    isInt: true,
    custom: {
      options: value => exists(models.User, value),
    },
  },
  type: {
    isInt: true,
    custom: {
      options: value => exists(models.WarehouseType, value),
    },
  },
});
