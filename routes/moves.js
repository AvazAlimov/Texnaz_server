import { Router } from 'express';
import move from '../controllers/move';
import authMiddleware from '../middlewares/auth';
import { validate, bodyCheck } from '../util/validation/move';

const router = Router();
router.get('/', authMiddleware, move.getAll);
router.get('/:warehouseId', authMiddleware, move.getAllPending);
router.post('/', authMiddleware, bodyCheck, validate, move.createMultiple);
router.post('/accept', authMiddleware, bodyCheck, validate, move.acceptMultiple);

export default router;
