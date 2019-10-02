import { Router } from 'express';
import product from '../controllers/product';
import authMiddleware from '../middlewares/auth';
import { check, validate } from '../util/validation/product';

const router = Router();
router.get('/', authMiddleware, product.getAll);
router.get('/:id', authMiddleware, product.get);
router.post('/', authMiddleware, check, validate, product.create);
router.post('/:id', authMiddleware, check, validate, product.update);
router.delete('/:id', authMiddleware, product.delete);

export default router;
