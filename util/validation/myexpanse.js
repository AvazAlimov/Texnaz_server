import { validationResult, checkSchema } from 'express-validator/check';
import models from '../../models';
import exists from '../check';

export const check = checkSchema({
  value: {
    isFloat: true,
  },
  typeId: {
    custom: {
      options: id => (id ? exists(models.ExpanseType, id) : true),
    },
  },
  formId: {
    custom: {
      options: id => (id ? exists(models.ExpanseForm, id) : true),
    },
  },
  purposeId: {
    custom: {
      options: id => (id ? exists(models.ExpansePurpose, id) : true),
    },
  },
  personId: {
    custom: {
      options: id => (id === null ? true : exists(models.Person, id)),
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
    req.expanse = {
      value: req.body.value,
      typeId: req.body.typeId,
      formId: req.body.formId,
      purposeId: req.body.purposeId,
      personId: req.body.personId,
    };
    next();
  }
}
