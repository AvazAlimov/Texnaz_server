import { Router } from 'express';
import province from '../controllers/province';
import authMiddleware from '../middlewares/auth';

const router = Router();
router.get('/', authMiddleware, province.getAll);

export default router;
