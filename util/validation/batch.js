import { validationResult, checkSchema } from 'express-validator/check';

export const check = checkSchema({
  date: {
    optional: true,
    isString: true,
  },
  transport_cash: {
    isFloat: true,
  },
  transport_non_cash: {
    isFloat: true,
  },
  total: {
    isFloat: true,
  },
  conversion: {
    isFloat: true,
  },
  bank_transfer: {
    isFloat: true,
  },
  market_rate: {
    isFloat: true,
  },
  official_rate: {
    isFloat: true,
  },
  exchange_rate: {
    isFloat: true,
  },
  local: {
    isBoolean: true,
  },
  approved: {
    optional: true,
    isBoolean: true,
  },
});

export function validate(req, res, next) {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    res.status(403).json({
      errors: errors.array(),
    });
  } else {
    req.batch = {
      name: req.body.name,
      number: req.body.number,
      weight: req.body.weight || 0,
      date: req.body.date,
      transport_cash: req.body.transport_cash,
      transport_non_cash: req.body.transport_non_cash,
      warehouse: req.body.warehouse,
      local: req.body.local,
      total: req.body.total,
      conversion: req.body.conversion,
      bank_transfer: req.body.bank_transfer,
      market_rate: req.body.market_rate,
      official_rate: req.body.official_rate,
      exchange_rate: req.body.exchange_rate,
      approved: req.body.approved,
    };
    next();
  }
}
