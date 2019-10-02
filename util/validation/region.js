import { validationResult, checkSchema } from 'express-validator/check';
import models from '../../models';
import exists from '../check';

export const check = checkSchema({
  provinceId: {
    isInt: true,
    custom: {
      options: value => exists(models.Province, value),
    },
  },
  name: {
    isString: true,
  },
});

export function validate(req, res, next) {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    res.status(403).json({
      errors: errors.array(),
    });
  } else {
    req.region = {
      provinceId: req.body.provinceId,
      name: req.body.name,
    };
    next();
  }
}
