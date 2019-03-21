import auth from './auth';
import users from './users';
import roles from './roles';
import supplies from './supplies';
import products from './products';
import purposes from './purposes';
import units from './units';
import tags from './tags';
import types from './types';
import warehouses from './warehouses';
import configurations from './configurations';
import suppliers from './suppliers';
import expanses from './expanses';

export default (app) => {
  app.use('/api/auth', auth);
  app.use('/api/users', users);
  app.use('/api/roles', roles);
  app.use('/api/products', products);
  app.use('/api/purposes', purposes);
  app.use('/api/units', units);
  app.use('/api/tags', tags);
  app.use('/api/types', types);
  app.use('/api/supplies', supplies);
  app.use('/api/warehouses', warehouses);
  app.use('/api/configurations', configurations);
  app.use('/api/suppliers', suppliers);
  app.use('/api/expanses', expanses);
};
