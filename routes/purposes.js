import { Router } from 'express';
import purpose from '../controllers/purpose';
import authMiddleware from '../middlewares/auth';

const router = Router();
router.get('/', authMiddleware, purpose.getAll);
router.get('/:id', authMiddleware, purpose.get);
router.post('/', authMiddleware, purpose.create);
router.post('/:id', authMiddleware, purpose.update);
router.delete('/:id', authMiddleware, purpose.delete);

export default router;
