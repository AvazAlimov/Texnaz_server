import { validationResult, checkSchema } from 'express-validator/check';

export const check = checkSchema({
  name: {
    isString: true,
  },
  country: {
    isString: true,
  },
  manufacturer: {
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
    req.brand = {
      name: req.body.name,
      country: req.body.country,
      manufacturer: req.body.manufacturer,
    };
    next();
  }
}
