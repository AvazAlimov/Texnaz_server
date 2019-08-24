import { checkSchema, validationResult } from 'express-validator/check';
import exists from '../check';
import models from '../../models';

export const check = checkSchema({
  number: {
    isString: true,
  },
  type: {
    isInt: true,
  },
  form: {
    isInt: true,
  },
  days: {
    isInt: true,
  },
  clientId: {
    isInt: true,
    custom: {
      options: id => exists(models.Client, id),
    },
  },
  managerId: {
    isInt: true,
    custom: {
      options: id => exists(models.User, id),
    },
  },
  userId: {
    isInt: true,
    optional: true,
    custom: {
      options: id => (id ? exists(models.User, id) : true),
    },
  },
  warehouseId: {
    isInt: true,
    custom: {
      options: id => exists(models.Warehouse, id),
    },
  },
  exchangeRate: {
    isString: true,
  },
  officialRate: {
    isString: true,
  },
  items: {
    isArray: true,
    custom: {
      options: (items) => {
        for (let i = 0; i < items.length; i += 1) {
          if (!(exists(models.Stock, items[i].stockId) && exists(models.Price, items[i].priceId))) {
            return false;
          }
        }
        return true;
      },
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
    req.return = {
      number: req.body.number,
      type: req.body.type,
      form: req.body.form,
      clientId: req.body.clientId,
      managerId: req.body.managerId,
      userId: req.body.userId,
      warehouseId: req.body.warehouseId,
      exchangeRate: req.body.exchangeRate,
      officialRate: req.body.officialRate,
      items: req.body.items,
      days: req.body.days,
    };
    next();
  }
}