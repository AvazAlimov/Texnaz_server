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
    id: req.params.id,
    model: models.Configuration,
    name: 'Configuration',
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
      req.configuration = {
        name: req.body.name,
        value: req.body.value,
      };
      next();
    });
  }
}

export const check = checkSchema({
  name: {
    isString: true,
  },
  value: {
    isString: true,
  },
});
