import { Router } from 'express';
import client from '../controllers/client';
import authMiddleware from '../middlewares/auth';
import { check, validate } from '../util/validation/client';

const router = Router();
router.get('/', authMiddleware, client.getAll);
router.get('/:id', authMiddleware, client.get);
router.post('/', authMiddleware, check, validate, client.create);
router.post('/:id', authMiddleware, check, validate, client.update);
router.delete('/:id', authMiddleware, client.delete);
router.post('/balance/:id', authMiddleware, client.updateBalance);
export default router;
