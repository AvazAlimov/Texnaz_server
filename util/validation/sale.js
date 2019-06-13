import { validationResult, checkSchema } from 'express-validator/check';
import models from '../../models';
import exists from '../check';

export const check = checkSchema({
  type: {
    isInt: true,
  },
  form: {
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
    req.sale = {
      type: req.body.type,
      form: req.body.form,
      clientId: req.body.clientId,
      managerId: req.body.managerId,
      userId: req.body.userId,
      warehouseId: req.body.warehouseId,
      items: req.body.items,
    };
    next();
  }
}
