import models from '../models';

export default {
  getAllTypes(_, res) {
    models.ExpanseType
      .findAll({})
      .then((items) => {
        res.status(200).json(items);
      })
      .catch(error => res.status(502).json(error));
  },

  getAllForms(_, res) {
    models.ExpanseForm
      .findAll({})
      .then((items) => {
        res.status(200).json(items);
      })
      .catch(error => res.status(502).json(error));
  },

  getAllPurposes(_, res) {
    models.ExpansePurpose
      .findAll({})
      .then((items) => {
        res.status(200).json(items);
      })
      .catch(error => res.status(502).json(error));
  },

  getAllPeople(_, res) {
    models.Person
      .findAll({})
      .then((items) => {
        res.status(200).json(items);
      })
      .catch(error => res.status(502).json(error));
  },

  createType(req, res) {
    if (!req.body.name) {
      res.sendStatus(403);
    } else {
      models.ExpanseType.create({
        name: req.body.name,
      })
        .then(item => res.status(200).json(item))
        .catch(error => res.status(502).json(error));
    }
  },

  createForm(req, res) {
    if (!req.body.name) { res.sendStatus(403); } else {
      models.ExpanseForm.create({
        name: req.body.name,
      })
        .then(item => res.status(200).json(item))
        .catch(error => res.status(502).json(error));
    }
  },

  createPurpose(req, res) {
    if (!req.body.name) { res.sendStatus(403); } else {
      models.ExpansePurpose.create({
        name: req.body.name,
      })
        .then(item => res.status(200).json(item))
        .catch(error => res.status(502).json(error));
    }
  },

  createPerson(req, res) {
    if (!req.body.name) { res.sendStatus(403); } else {
      models.Person.create({
        name: req.body.name,
      })
        .then(item => res.status(200).json(item))
        .catch(error => res.status(502).json(error));
    }
  },

  create(req, res) {
    models.MyExpanse.create(req.expanse)
      .then(() => res.sendStatus(200))
      .catch(error => res.status(502).json(error));
  },

  remove(req, res) {
    models.MyExpanse.destroy({
      where: { id: req.params.id },
    }).then(() => res.sendStatus(200))
      .catch(error => res.status(502).json(error));
  },

  getAll(_, res) {
    models.MyExpanse
      .findAll({
        include: [{
          model: models.ExpanseForm,
          as: 'form',
        }, {
          model: models.ExpanseType,
          as: 'type',
        }, {
          model: models.ExpansePurpose,
          as: 'purpose',
        }, {
          model: models.Person,
          as: 'person',
        }],
      })
      .then((items) => {
        res.status(200).json(items);
      })
      .catch(error => res.status(502).json(error));
  },
};
