import { validationResult, body } from 'express-validator/check';

export function validate(req, res, next) {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    res.status(403).json({
      errors: errors.array(),
    });
  } else {
    req.prices = req.body.prices;
    next();
  }
}

export const bodyCheck = [
  body('prices').isArray(),
];
