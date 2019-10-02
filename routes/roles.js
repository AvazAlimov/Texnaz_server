import { Router } from 'express';
import role from '../controllers/role';
import authMiddleware from '../middlewares/auth';

const router = Router();
router.get('/', authMiddleware, role.getAll);

export default router;
