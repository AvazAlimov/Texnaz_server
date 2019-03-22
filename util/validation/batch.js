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
    id: req.body.supply,
    model: models.Supply,
    name: 'Supply',
  },
  {
    id: req.body.warehouse,
    model: models.Warehouse,
    name: 'Warehouse',
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
    });
  }
}

export const check = checkSchema({
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
  },
  supply: {
    isInt: true,
  },
});
