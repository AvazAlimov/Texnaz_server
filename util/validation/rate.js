import { checkSchema, validationResult } from 'express-validator/check';

export const check = checkSchema({
  exchangeRate: {
    isString: true,
  },
  officialRate: {
    isString: true,
  },
});

export function validate(req, res, next) {
  const errors = validationResult(req);
  if (!errors.isEmpty()) { res.status(403).json({ errror: errors.array() }); } else {
    req.rate = {
      userId: req.userId,
      exchangeRate: req.body.exchangeRate,
      officialRate: req.body.officialRate,
      createdAt: new Date(),
    };
    next();
  }
}
