import auth from './auth';
import users from './users';
import roles from './roles';
import products from './products';
import purposes from './purposes';
import units from './units';
import tags from './tags';
import types from './types';

export default (app) => {
  app.use('/api/auth', auth);
  app.use('/api/users', users);
  app.use('/api/roles', roles);
  app.use('/api/products', products);
  app.use('/api/purposes', purposes);
  app.use('/api/units', units);
  app.use('/api/tags', tags);
  app.use('/api/types', types);
};
