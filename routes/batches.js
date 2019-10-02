import { Router } from 'express';
import batch from '../controllers/batch';
import authMiddleware from '../middlewares/auth';
import { check, validate } from '../util/validation/batch';

const router = Router();
router.get('/', authMiddleware, batch.getAll);
router.get('/:id', authMiddleware, batch.get);
router.post('/', authMiddleware, batch.create);
router.post('/:id', authMiddleware, check, validate, batch.update);
router.delete('/:id', authMiddleware, batch.delete);

export default router;
