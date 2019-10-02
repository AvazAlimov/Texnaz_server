import { Router } from 'express';
import prestock from '../controllers/prestock';
import authMiddleware from '../middlewares/auth';
import { validate, bodyCheck } from '../util/validation/prestock';

const router = Router();
router.get('/', authMiddleware, prestock.getAll);
router.post('/', authMiddleware, bodyCheck, validate, prestock.createMultiple);
router.post('/accept', authMiddleware, prestock.acceptMultiple);

export default router;
