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
  managerId: {
    isInt: true,
    custom: {
      options: id => exists(models.User, id),
    },
  },
  number: {
    isString: true,
  },
  ratio: {
    isFloat: true,
  },
  provinceId: {
    isInt: true,
  },
  clientId: {
    isInt: true,
    custom: {
      options: id => exists(models.Client, id),
    },
  },
  sum: {
    isFloat: true,
  },
  currency: {
    isInt: true,
  },
});

export function validate(req, res, next) {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    res.status(403).json({
      errors: errors.array(),
    });
  } else {
    req.payment = {
      number: req.body.number,
      sum: req.body.sum,
      currency: req.body.currency,
      ratio: req.body.ratio,
      userId: req.body.userId,
      provinceId: req.body.provinceId,
      managerId: req.body.managerId,
      clientId: req.body.clientId,
      brandId: 1,
    };
    next();
  }
}
