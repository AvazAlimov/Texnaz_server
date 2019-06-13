import { validationResult, checkSchema } from 'express-validator/check';

export const check = checkSchema({
  name: {
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
    req.type = {
      name: req.body.name,
    };
    next();
  }
}
