import { Router } from 'express';
import province from '../controllers/province';
import authMiddleware from '../middlewares/auth';

const router = Router();
router.get('/', authMiddleware, province.getAll);
router.get('/:id', authMiddleware, province.get);

export default router;
