import { Router } from 'express';
import ret from '../controllers/return';
import authMiddleware from '../middlewares/auth';
import { validate, bodyCheck } from '../util/validation/return';

const router = Router();
router.get('/:warehouseId', authMiddleware, ret.getAll);
router.post('/accept', authMiddleware, bodyCheck, validate, ret.acceptMultiple);
export default router;
