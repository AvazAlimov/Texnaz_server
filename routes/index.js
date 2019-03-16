import auth from './auth';
import users from './users';
import roles from './roles';
import products from './products';

export default (app) => {
  app.use('/api/auth', auth);
  app.use('/api/users', users);
  app.use('/api/roles', roles);
  app.use('/api/products', products);
};
