import { Router } from 'express';
import configuration from '../controllers/configuration';
import authMiddleware from '../middlewares/auth';
import { check, validate } from '../util/validation/configuration';

const router = Router();
router.get('/', authMiddleware, configuration.getAll);
router.get('/exchange', authMiddleware, configuration.getExchangeRate);
router.get('/official', authMiddleware, configuration.getOfficialRate);
router.get('/:id', authMiddleware, configuration.get);
router.post('/:id', authMiddleware, check, validate, configuration.update);

export default router;
