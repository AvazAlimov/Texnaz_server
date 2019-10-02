import { Router } from 'express';
import lost from '../controllers/lost';
import authMiddleware from '../middlewares/auth';
// import { validate, bodyCheck } from '../util/validation/return';

const router = Router();
router.get('/:warehouseId', authMiddleware, lost.getAll);
router.post('/', authMiddleware, lost.found);
// router.post('/accept', authMiddleware, bodyCheck, validate, ret.acceptMultiple);
export default router;
