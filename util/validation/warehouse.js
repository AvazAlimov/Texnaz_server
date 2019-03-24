import { validationResult, checkSchema } from 'express-validator/check';
import models from '../../models';
import exists from '../check';

export function validate(req, res, next) {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    res.status(403).json({
      errors: errors.array(),
    });
  } else {
    req.warehouse = {
      name: req.body.name,
      owner: req.body.owner,
      address: req.body.address,
      company: req.body.company,
      supply: req.body.supply,
    };
    next();
  }
}

export const check = checkSchema({
  name: {
    isString: true,
  },
  owner: {
    isString: true,
  },
  address: {
    isString: true,
  },
  company: {
    isString: true,
  },
  supply: {
    isInt: true,
    custome: value => exists(models.Supply, value),
  },
});
