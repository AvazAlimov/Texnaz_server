import { Router } from 'express';
import middleware from '../middlewares/auth';
import returnclient from '../controllers/return-client';

const router = Router();
router.get('/', middleware, returnclient.getAll);
export default router;
