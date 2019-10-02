import { Router } from 'express';
import mix from '../controllers/mix';
import authMiddleware from '../middlewares/auth';
import { check, validate } from '../util/validation/mix';

const router = Router();
router.get('/', authMiddleware, mix.getAll);
router.get('/:id', authMiddleware, mix.get);
router.post('/', authMiddleware, check, validate, mix.create);
router.post('/:id', authMiddleware, check, validate, mix.update);
router.delete('/:id', authMiddleware, mix.delete);

export default router;
