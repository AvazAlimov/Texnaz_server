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
  clientId: {
    isInt: true,
    custom: {
      options: id => exists(models.Client, id),
    },
  },
  sum: {
    isFloat: true,
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
      ratio: req.body.ratio,
      userId: req.body.userId,
      managerId: req.body.managerId,
      clientId: req.body.clientId,
      brandId: req.body.brandId,
    };
    next();
  }
}
