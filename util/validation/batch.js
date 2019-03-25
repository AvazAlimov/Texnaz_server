import { validationResult, checkSchema } from 'express-validator/check';
import models from '../../models';
import exists from '../check';

export const check = checkSchema({
  name: {
    isString: true,
  },
  number: {
    isInt: true,
  },
  date: {
    isString: true,
  },
  transport_cash: {
    isFloat: true,
  },
  transport_non_cash: {
    isFloat: true,
  },
  warehouse: {
    isInt: true,
    custom: {
      options: value => exists(models.Warehouse, value),
    },
  },
  supply: {
    isInt: true,
    custom: {
      options: value => exists(models.Supply, value),
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
    req.batch = {
      number: req.body.number,
      weight: req.body.weight || 0,
      date: req.body.date,
      transport_cash: req.body.transport_cash,
      transport_non_cash: req.body.transport_non_cash,
      warehouse: req.body.warehouse,
      supply: req.body.supply,
    };
    next();
  }
}
