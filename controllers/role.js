import models from '../models';

export default {
  async getAll(_, res) {
    try {
      const roles = await models.Role.findAll({});
      res.status(200).json(roles);
    } catch (error) { res.status(502).json(error); }
  },
};
