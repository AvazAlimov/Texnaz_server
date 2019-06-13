import { Router } from 'express';
import info from '../controllers/info';
import authMiddleware from '../middlewares/auth';

const router = Router();

router.get('/colors', authMiddleware, info.getColors);
router.get('/warehouse_types', authMiddleware, info.getWarehouseTypes);

export default router;
