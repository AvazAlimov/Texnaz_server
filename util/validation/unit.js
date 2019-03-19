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
    req.unit = {
      name: req.body.name,
    };
    next();
  }
}

export const check = checkSchema({
  name: {
    isString: true,
  },
});
