import { Router } from 'express';
import type from '../controllers/product-type';
import authMiddleware from '../middlewares/auth';
import { check, validate } from '../util/validation/product-type';

const router = Router();
router.get('/', authMiddleware, type.getAll);
router.get('/:id', authMiddleware, type.get);
router.post('/', authMiddleware, check, validate, type.create);
router.post('/:id', authMiddleware, check, validate, type.update);
router.delete('/:id', authMiddleware, type.delete);

export default router;
