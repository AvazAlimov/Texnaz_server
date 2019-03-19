import { Router } from 'express';
import purpose from '../controllers/purpose';
import authMiddleware from '../middlewares/auth';
import { check, validate } from '../util/validation/purpose';

const router = Router();
router.get('/', authMiddleware, purpose.getAll);
router.get('/:id', authMiddleware, purpose.get);
router.post('/', authMiddleware, check, validate, purpose.create);
router.post('/:id', authMiddleware, check, validate, purpose.update);
router.delete('/:id', authMiddleware, purpose.delete);

export default router;
