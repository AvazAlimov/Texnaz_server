import { Router } from 'express';
import user from '../controllers/user';
import authMiddleware from '../middlewares/auth';
import { check, validate } from '../util/validation/user';

const router = Router();
router.get('/', authMiddleware, user.getAll);
router.get('/:id', authMiddleware, user.get);
router.post('/', authMiddleware, check, validate, user.create);
router.post('/:id', authMiddleware, check, validate, user.update);
router.delete('/:id', authMiddleware, user.delete);

export default router;
