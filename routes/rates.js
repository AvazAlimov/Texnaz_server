import { Router } from 'express';
import middleware from '../middlewares/auth';
import { check, validate } from '../util/validation/rate';
import rates from '../controllers/rates';

const router = Router();

router.get('/', middleware, rates.getAll);
router.post('/', middleware, check, validate, rates.create);

export default router;
