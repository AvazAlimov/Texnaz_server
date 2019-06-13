import { Router } from 'express';
import warehouse from '../controllers/warehouse';
import authMiddleware from '../middlewares/auth';
import { check, validate } from '../util/validation/warehouse';

const router = Router();
router.get('/', authMiddleware, warehouse.getAll);
router.get('/:id', authMiddleware, warehouse.get);
router.post('/', authMiddleware, check, validate, warehouse.create);
router.post('/:id', authMiddleware, check, validate, warehouse.update);
router.delete('/:id', authMiddleware, warehouse.delete);

export default router;
