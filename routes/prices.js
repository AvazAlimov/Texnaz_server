import { Router } from 'express';
import price from '../controllers/price';
import authMiddleware from '../middlewares/auth';
import { bodyCheck, validate } from '../util/validation/price';

const router = Router();
router.get('/', authMiddleware, price.getAll);
router.post('/', authMiddleware, bodyCheck, validate, price.createMultiple);

export default router;
