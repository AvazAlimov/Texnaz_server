import { sign } from 'jsonwebtoken';
import { compareSync } from 'bcrypt';
import models from '../models';

export default {
  login(req, res) {
    models.User.findAll({ username: req.body.username, limit: 1 })
      .then((users) => {
        if (users[0]) {
          if (compareSync(req.body.password, users[0].password)) {
            sign({ userId: users[0].id }, process.env.JWT_SECRET_KEY, {}, (error, token) => {
              if (error) res.status(502).json(error);
              res.status(200).json({ token });
            });
          } else res.sendStatus(401);
        } else res.sendStatus(404);
      })
      .catch(error => res.status(502).json(error));
  },
};
