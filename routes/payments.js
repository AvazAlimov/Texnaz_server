import { Router } from 'express';
import payment from '../controllers/payment';
import authMiddleware from '../middlewares/auth';
import { validate, check } from '../util/validation/payment';

const router = Router();
router.get('/', authMiddleware, payment.getAll);
router.get('/:id', authMiddleware, payment.get);
router.post('/:id', authMiddleware, payment.updateCurrentBalance);
router.post('/', authMiddleware, check, validate, payment.create);
router.post('/approve/:id', authMiddleware, payment.approve);
router.delete('/:id', authMiddleware, payment.delete);

export default router;
