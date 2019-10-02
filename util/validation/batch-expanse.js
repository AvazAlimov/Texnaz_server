import { validationResult, checkSchema } from 'express-validator/check';
import models from '../../models';
import exists from '../check';

export const check = checkSchema({
  name: {
    isString: true,
  },
  value: {
    isFloat: true,
  },
  is_transport: {
    isBoolean: true,
  },
  is_cash: {
    isBoolean: true,
  },
  batchId: {
    isInt: true,
    custom: {
      options: batchId => exists(models.Batch, batchId),
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
    req.batchExpanse = {
      name: req.body.name,
      value: req.body.value,
      is_transport: req.body.is_transport,
      is_cash: req.body.is_cash,
      batchId: req.body.batchId,
    };
    next();
  }
}
