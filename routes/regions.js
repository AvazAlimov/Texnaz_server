import { Router } from 'express';
import region from '../controllers/region';
import authMiddleware from '../middlewares/auth';
import { check, validate } from '../util/validation/region';

const router = Router();
router.get('/', authMiddleware, region.getAll);
router.get('/:id', authMiddleware, region.get);
router.post('/', authMiddleware, check, validate, region.create);
router.post('/:id', authMiddleware, check, validate, region.update);
router.delete('/:id', authMiddleware, region.delete);

export default router;
