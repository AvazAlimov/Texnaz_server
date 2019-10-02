import { Router } from 'express';
import brand from '../controllers/brand';
import authMiddleware from '../middlewares/auth';
import { check, validate } from '../util/validation/brand';

const router = Router();
router.get('/', authMiddleware, brand.getAll);
router.get('/:id', authMiddleware, brand.get);
router.post('/', authMiddleware, check, validate, brand.create);
router.post('/:id', authMiddleware, check, validate, brand.update);
router.delete('/:id', authMiddleware, brand.delete);

export default router;
