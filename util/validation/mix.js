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
  provinceId: {
    isInt: true,
  },
  end: {
    isString: true,
  },
  total: {
    isFloat: true,
  },
  min: {
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
    req.mix = {
      managerId: req.body.managerId,
      type: req.body.type,
      start: req.body.start,
      end: req.body.end,
      provinceId: req.body.provinceId,
      total: req.body.total,
      min: req.body.min,
      ranges: req.body.ranges || [],
    };
    next();
  }
}
