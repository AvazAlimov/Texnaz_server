import { Router } from 'express';
import myexpanse from '../controllers/myexpanse';
import authMiddleware from '../middlewares/auth';

const router = Router();

router.get('/types', authMiddleware, myexpanse.getAllTypes);
router.get('/forms', authMiddleware, myexpanse.getAllForms);
router.get('/purposes', authMiddleware, myexpanse.getAllPurposes);
router.get('/people', authMiddleware, myexpanse.getAllPeople);

export default router;
