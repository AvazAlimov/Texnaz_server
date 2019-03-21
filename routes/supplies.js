import { Router } from 'express';
import supply from '../controllers/supply';
import authMiddleware from '../middlewares/auth';

const router = Router();
router.get('/', authMiddleware, supply.getAll);

export default router;
