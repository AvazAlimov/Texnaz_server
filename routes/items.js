import { Router } from 'express';
import item from '../controllers/item';
import authMiddleware from '../middlewares/auth';
import { check, validate } from '../util/validation/item';

const router = Router();
router.get('/:batchId', authMiddleware, item.getAll);
// router.get('/:id', authMiddleware, batchExpanse.get);
router.post('/', authMiddleware, check, validate, item.create);
router.post('/:id', authMiddleware, check, validate, item.update);
router.delete('/:id', authMiddleware, item.delete);

export default router;
