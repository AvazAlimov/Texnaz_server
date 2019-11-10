import { Router } from 'express';
import stock from '../controllers/stock';
import authMiddleware from '../middlewares/auth';
import { validate, bodyCheck } from '../util/validation/stock';

const router = Router();
router.get('/', authMiddleware, stock.getAll);
router.get('/product/:id', authMiddleware, stock.getByProduct);
router.get('/:id', authMiddleware, stock.get);
router.post('/', authMiddleware, bodyCheck, validate, stock.createMultiple);
// router.post('/:id', authMiddleware, checkBody, validate, stock.update);
// router.delete('/:id', authMiddleware, stock.delete);

export default router;
