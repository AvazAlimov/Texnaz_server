import { Router } from 'express';
import user from '../controllers/user';
import authMiddleware from '../middlewares/auth';

const router = Router();
router.get('/', authMiddleware.verifyUser, user.getAll);
router.get('/:id', authMiddleware.verifyUser, user.get);
router.post('/', authMiddleware.verifyUser, user.create);
router.post('/:id', authMiddleware.verifyUser, user.update);
router.delete('/:id', authMiddleware.verifyUser, user.delete);

export default router;
