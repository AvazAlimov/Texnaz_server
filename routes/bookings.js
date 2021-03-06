import { Router } from 'express';
import booking from '../controllers/booking';
import authMiddleware from '../middlewares/auth';
import { validate, bodyCheck } from '../util/validation/booking';

const router = Router();
router.get('/', authMiddleware, booking.getAll);
router.post('/', authMiddleware, bodyCheck, validate, booking.createMultiple);
router.delete('/:id', authMiddleware, booking.delete);
export default router;
