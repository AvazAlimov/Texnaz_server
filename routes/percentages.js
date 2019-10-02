import { Router } from 'express';
import percentage from '../controllers/percentage';
import authMiddleware from '../middlewares/auth';
import { check, validate } from '../util/validation/percentage';

const router = Router();
router.get('/', authMiddleware, percentage.getAll);
router.get('/:id', authMiddleware, percentage.get);
router.post('/', authMiddleware, check, validate, percentage.create);
router.post('/:id', authMiddleware, check, validate, percentage.update);
router.delete('/:id', authMiddleware, percentage.delete);

export default router;
