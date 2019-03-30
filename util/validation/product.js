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
  brand: {
    isInt: true,
    custom: {
      options: value => exists(models.Brand, value),
    },
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
      options: (value) => {
        if (!value) return false;
        return exists(models.ProductType, value);
      },
    },
  },
  purpose: {
    optional: true,
    custom: {
      options: (value) => {
        if (!value) return true;
        return exists(models.Purpose, value);
      },
    },
  },
  tags: {
    optional: true,
    isArray: true,
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
      brand: req.body.brand,
      unit: req.body.unit,
      type: req.body.type,
      cleaning: req.body.cleaning,
      vat: req.body.vat,
      tax: req.body.tax,
      excise: req.body.excise,
      code: req.body.code || null,
      purpose: req.body.purpose || null,
      tags: req.body.tags || [],
    };
    next();
  }
}
