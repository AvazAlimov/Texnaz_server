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
      productId: req.body.productId,
      batchId: req.body.batchId,
      quantity: req.body.quantity,
      contract_price: req.body.contract_price,
      customs_price: req.body.customs_price,
    };
    next();
  }
}
