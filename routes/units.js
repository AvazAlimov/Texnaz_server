import { Router } from 'express';
import unit from '../controllers/unit';
import authMiddleware from '../middlewares/auth';
import { check, validate } from '../util/validation/unit';

const router = Router();
router.get('/', authMiddleware, unit.getAll);
router.get('/:id', authMiddleware, unit.get);
router.post('/', authMiddleware, check, validate, unit.create);
router.post('/:id', authMiddleware, check, validate, unit.update);
router.delete('/:id', authMiddleware, unit.delete);

export default router;
