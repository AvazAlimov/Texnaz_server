import { validationResult, body } from 'express-validator/check';

export function validate(req, res, next) {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    res.status(403).json({
      errors: errors.array(),
    });
  } else {
    const [price] = req.body.prices;
    req.productId = price.productId;
    req.quantity = price.quantity || 0;
    if (price.quantity) {
      delete price.quantity;
    }
    req.prices = [price];
    next();
  }
}

export const bodyCheck = [
  body('prices').isArray(),
];
