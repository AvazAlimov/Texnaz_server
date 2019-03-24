import { validationResult, checkSchema } from 'express-validator/check';
import models from '../../models';
import checkRules from './rule';

function getRuleFields(req) {
  return [{
    id: req.body.unit,
    model: models.Unit,
    name: 'Unit',
  },
  {
    id: req.body.type,
    model: models.Type,
    name: 'Type',
  },
  {
    id: req.body.purpose,
    model: models.Purpose,
    name: 'Purpose',
  },
  {
    id: req.body.tag,
    model: models.Tag,
    name: 'Tag',
  },
  ];
}

export function validate(req, res, next) {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    res.status(403).json({
      errors: errors.array(),
    });
  } else {
    checkRules(getRuleFields(req), res, () => {
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
    });
  }
}

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
  unit: {
    isInt: true,
  },
  type: {
    isInt: true,
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
    isString: true,
  },
  purpose: {
    optional: true,
    isInt: true,
  },
  tag: {
    optional: true,
    isInt: true,
  },
});
