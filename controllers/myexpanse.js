import models from '../models';

export default {
  getAllTypes(req, res) {
    models.ExpanseType
      .findAll({})
      .then((items) => {
        res.status(200).json(items);
      })
      .catch(error => res.status(502).json(error));
  },

  getAllForms(req, res) {
    models.ExpanseForm
      .findAll({})
      .then((items) => {
        res.status(200).json(items);
      })
      .catch(error => res.status(502).json(error));
  },

  getAllPurposes(req, res) {
    models.ExpansePurpose
      .findAll({})
      .then((items) => {
        res.status(200).json(items);
      })
      .catch(error => res.status(502).json(error));
  },

  getAllPeople(req, res) {
    models.Person
      .findAll({})
      .then((items) => {
        res.status(200).json(items);
      })
      .catch(error => res.status(502).json(error));
  },
};
