import {
  validationResult,
  checkSchema,
} from 'express-validator/check';
import models from '../../models';

async function exists({
  id,
  model,
}) {
  if (id) {
    const instance = await model.findByPk(id);
    if (!instance) return false;
  }
  return true;
}

async function checkRules(req, res, next) {
  const fields = [{
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
  const error = [];
  const promises = [];

  for (let index = 0; index < fields.length; index += 1) {
    promises.push(exists(fields[index]));
  }
  const results = await Promise.all(promises);

  results.forEach((result, index) => {
    if (!result) error.push(`${fields[index].name} not found`);
  });

  if (error.length) res.status(403).json(error);
  else next();
}

export function validate(req, res, next) {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    res.status(403).json({
      errors: errors.array(),
    });
  } else {
    checkRules(req, res, () => {
      req.product = {
        name: req.body.name,
        code: req.body.code,
        packing: req.body.packing,
        color: req.body.color,
        unit: req.body.unit,
        type: req.body.type,
        profit: req.body.profit,
        cleaning: req.body.cleaning,
        vat: req.body.vat,
        tax: req.body.tax,
        excise: req.body.excise,
        ratio: req.body.ratio,
        purpose: req.body.purpose,
        tag: req.body.tag,
      };
      next();
    });
  }
}

export const check = checkSchema({
  name: {
    isString: true,
  },
  code: {
    isString: true,
  },
  packing: {
    isInt: true,
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
  profit: {
    isFloat: true,
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
  ratio: {
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
