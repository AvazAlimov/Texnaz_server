import { Router } from 'express';
import move from '../controllers/move';
import authMiddleware from '../middlewares/auth';
import { validate, bodyCheck } from '../util/validation/move';

const router = Router();
router.get('/:warehouseId', authMiddleware, move.getAll);
router.post('/', authMiddleware, bodyCheck, validate, move.createMultiple);
router.delete('/', authMiddleware, move.deleteMultiple);

export default router;
