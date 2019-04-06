import { validationResult, checkSchema } from 'express-validator/check';
import models from '../../models';
import exists from '../check';

export const check = checkSchema({
  quantity: {
    isFloat: true,
  },
  contract_price: {
    isFloat: true,
  },
  customs_price: {
    isFloat: true,
  },
  excise: {
    isFloat: true,
  },
  tax: {
    isFloat: true,
  },
  vat: {
    isFloat: true,
  },
  cleaning: {
    isFloat: true,
  },
  cash_profitability: {
    isFloat: true,
  },
  income_tax: {
    isFloat: true,
  },
  productId: {
    isInt: true,
    custom: {
      options: productId => exists(models.Product, productId),
    },
  },
  batchId: {
    isInt: true,
    custom: {
      options: batchId => exists(models.Batch, batchId),
    },
  },
});

export function validate(req, res, next) {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    res.status(403).json({
      errors: errors.array(),
    });
  } else {
    req.item = {
      tax: req.body.tax,
      vat: req.body.vat,
      excise: req.body.excise,
      batchId: req.body.batchId,
      quantity: req.body.quantity,
      cleaning: req.body.cleaning,
      productId: req.body.productId,
      income_tax: req.body.income_tax,
      customs_price: req.body.customs_price,
      contract_price: req.body.contract_price,
      cash_profitability: req.body.cash_profitability,
    };
    next();
  }
}
