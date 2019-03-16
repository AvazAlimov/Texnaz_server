import { Router } from 'express';
import auth from '../controllers/auth';
import authMiddleware from '../middlewares/auth';

const router = Router();
router.post('/login', auth.login);
router.get('/details', authMiddleware, auth.getUserDetails);

export default router;
