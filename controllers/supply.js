import models from '../models';

export default {
  async getAll(_, res) {
    try {
      const supplies = await models.Supply.findAll({});
      res.status(200).json(supplies);
    } catch (error) { res.status(502).json(error); }
  },
};
