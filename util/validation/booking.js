import { validationResult, body } from 'express-validator/check';

export function validate(req, res, next) {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    res.status(403).json({
      errors: errors.array(),
    });
  } else {
    req.bookings = req.body.bookings;
    next();
  }
}

export const bodyCheck = [
  body('bookings').isArray(),
];
