import { Router } from 'express';
import middleware from '../middlewares/auth';
import returnclient from '../controllers/returnClient';
import { check, validate } from '../util/validation/returnClient';

const router = Router();
router.get('/', middleware, returnclient.getAll);
router.get('/:id', middleware, returnclient.get);
router.post('/', middleware, check, validate, returnclient.return);
export default router;
