import { Router } from 'express';
import plan from '../controllers/plan';
import authMiddleware from '../middlewares/auth';
import { check, validate } from '../util/validation/plan';

const router = Router();
router.get('/', authMiddleware, plan.getAll);
router.get('/:id', authMiddleware, plan.get);
router.post('/', authMiddleware, check, validate, plan.create);
router.post('/:id', authMiddleware, check, validate, plan.update);
router.delete('/:id', authMiddleware, plan.delete);

export default router;
