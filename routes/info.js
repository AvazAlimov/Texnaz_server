import { Router } from 'express';
import info from '../controllers/info';
import authMiddleware from '../middlewares/auth';

const router = Router();

router.get('/colors', authMiddleware, info.getColors);

export default router;
