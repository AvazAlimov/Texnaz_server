import { validationResult, checkSchema } from 'express-validator/check';
import models from '../../models';
import exists from '../check';

export const check = checkSchema({
  name: {
    isString: true,
  },
  packing: {
    isFloat: true,
  },
  color: {
    isString: true,
  },
  cleaning: {
    isFloat: true,
  },
  vat: {
    isFloat: true,
  },
  tax: {
    isFloat: true,
  },
  excise: {
    isFloat: true,
  },
  code: {
    optional: true,
  },
  unit: {
    isInt: true,
    custom: {
      options: value => exists(models.Unit, value),
    },
  },
  type: {
    isInt: true,
    custom: {
      options: value => exists(models.Type, value),
    },
  },
  purpose: {
    optional: true,
    isInt: true,
    custom: {
      options: value => exists(models.Purpose, value),
    },
  },
  tag: {
    optional: true,
    isInt: true,
    custom: {
      options: value => exists(models.Tag, value),
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
    req.product = {
      name: req.body.name,
      packing: req.body.packing,
      color: req.body.color,
      unit: req.body.unit,
      type: req.body.type,
      cleaning: req.body.cleaning,
      vat: req.body.vat,
      tax: req.body.tax,
      excise: req.body.excise,
      code: req.body.ratio || null,
      purpose: req.body.purpose || null,
      tag: req.body.tag || null,
    };
    next();
  }
}
