import { Router } from 'express';
import payment from '../controllers/payment';
import authMiddleware from '../middlewares/auth';
import { validate, check } from '../util/validation/payment';

const router = Router();
router.get('/', authMiddleware, payment.getAll);
router.post('/', authMiddleware, check, validate, payment.create);

export default router;
