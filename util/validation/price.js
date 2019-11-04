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
    req.userId = price.userId;
    delete price.quantity;
    delete price.userId;
    req.prices = [price];
    req.price = price;
    next();
  }
}

export const bodyCheck = [
  body('prices').isArray(),
];
