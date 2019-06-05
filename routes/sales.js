import { Router } from 'express';
import sale from '../controllers/sale';
import authMiddleware from '../middlewares/auth';
import { check, validate } from '../util/validation/sale';

const router = Router();
router.get('/', authMiddleware, sale.getAll);
router.get('/:id', authMiddleware, sale.get);
router.post('/', authMiddleware, check, validate, sale.create);

export default router;
