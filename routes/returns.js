import { Router } from 'express';
import ret from '../controllers/return';
import authMiddleware from '../middlewares/auth';

const router = Router();
router.get('/:warehouseId', authMiddleware, ret.getAll);

export default router;
