export default async function exists(model, value) {
  const units = (await model.findAll({ attributes: ['id'], raw: true })).map(id => id.id);
  return units.includes(value);
}
