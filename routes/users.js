import { Router } from 'express';
import user from '../controllers/user';
import authMiddleware from '../middlewares/auth';

const router = Router();
router.get('/', authMiddleware, user.getAll);
router.get('/:id', authMiddleware, user.get);
router.post('/', authMiddleware, user.create);
router.post('/:id', authMiddleware, user.update);
router.delete('/:id', authMiddleware, user.delete);

export default router;
