import { Router } from 'express';
import user from '../controllers/user';

const router = Router();
router.post('/', user.create);

export default router;
