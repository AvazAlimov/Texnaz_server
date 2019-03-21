import { Router } from 'express';
import supplier from '../controllers/supplier';
import authMiddleware from '../middlewares/auth';
import { check, validate } from '../util/validation/supplier';

const router = Router();
router.get('/', authMiddleware, supplier.getAll);
router.get('/:id', authMiddleware, supplier.get);
router.post('/', authMiddleware, check, validate, supplier.create);
router.post('/:id', authMiddleware, check, validate, supplier.update);
router.delete('/:id', authMiddleware, supplier.delete);

export default router;
