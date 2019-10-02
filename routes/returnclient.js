import { Router } from 'express';
import middleware from '../middlewares/auth';
import returnclient from '../controllers/return-client';
import { check, validate } from '../util/validation/returnClient';

const router = Router();
router.get('/', middleware, returnclient.getAll);
router.post('/', middleware, check, validate, returnclient.return);
export default router;
