import models from '../models';

export default {
  getColors(_, res) {
    models.Product.findAll({
      attributes: ['color'],
      group: ['color'],
    })
      .then((result) => {
        const colors = result.map(item => item.color);
        res.status(200).json(colors);
      })
      .catch(error => res.status(502).json(error));
  },

  getWarehouseTypes(_, res) {
    models.WarehouseType.findAll()
      .then((types) => { res.status(200).json(types); })
      .catch(error => res.status(502).json(error));
  },
};
