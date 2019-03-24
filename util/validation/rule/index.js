async function exists({ id, model }) {
  if (id) {
    const instance = await model.findByPk(id);
    if (!instance) return false;
  }
  return true;
}

export default async function checkRules(fields, res, next) {
  const error = [];
  const promises = [];
  for (let index = 0; index < fields.length; index += 1) {
    promises.push(exists(fields[index]));
  }
  const results = await Promise.all(promises);
  results.forEach((result, index) => {
    if (!result) error.push(`${fields[index].name} not found`);
  });
  if (error.length) res.status(403).json(error);
  else next();
}
