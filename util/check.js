export async function saleExists(model, value) {
  const sales = (await model.findAll({ attributes: ['number'], raw: true })).map(sale => sale.number);
  return !sales.find(number => number === value);
}

export default async function exists(model, value) {
  const units = (await model.findAll({ attributes: ['id'], raw: true })).map(id => id.id);
  return units.includes(value);
}
