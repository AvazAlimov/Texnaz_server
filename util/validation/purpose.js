import {
  validationResult,
  checkSchema,
} from 'express-validator/check';

export function validate(req, res, next) {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    res.status(403).json({
      errors: errors.array(),
    });
  } else {
    req.purpose = {
      number: req.body.number,
      description: req.body.description,
    };
    next();
  }
}

export const check = checkSchema({
  number: {
    isInt: true,
  },
  description: {
    isString: true,
  },
});
