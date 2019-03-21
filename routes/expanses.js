import { Router } from 'express';
import expanse from '../controllers/expanse';
import authMiddleware from '../middlewares/auth';
import { check, validate } from '../util/validation/expanse';

const router = Router();
router.get('/', authMiddleware, expanse.getAll);
router.get('/:id', authMiddleware, expanse.get);
router.post('/', authMiddleware, check, validate, expanse.create);
router.post('/:id', authMiddleware, check, validate, expanse.update);
router.delete('/:id', authMiddleware, expanse.delete);

export default router;
