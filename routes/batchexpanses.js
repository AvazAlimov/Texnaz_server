import { Router } from 'express';
import batchExpanse from '../controllers/batch-expanse';
import authMiddleware from '../middlewares/auth';
import { check, validate } from '../util/validation/batch-expanse';

const router = Router();
router.get('/:batchId', authMiddleware, batchExpanse.getAll);
// router.get('/:id', authMiddleware, batchExpanse.get);
router.post('/', authMiddleware, check, validate, batchExpanse.create);
router.post('/:id', authMiddleware, check, validate, batchExpanse.update);
router.delete('/:id', authMiddleware, batchExpanse.delete);

export default router;
