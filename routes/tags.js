import { Router } from 'express';
import tag from '../controllers/tag';
import authMiddleware from '../middlewares/auth';
import { check, validate } from '../util/validation/tag';

const router = Router();
router.get('/', authMiddleware, tag.getAll);
router.get('/:id', authMiddleware, tag.get);
router.post('/', authMiddleware, check, validate, tag.create);
router.post('/:id', authMiddleware, check, validate, tag.update);
router.delete('/:id', authMiddleware, tag.delete);

export default router;
