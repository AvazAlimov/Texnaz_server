import { Router } from 'express';
import middleware from '../middlewares/auth';
import territory from '../controllers/territory';

const router = Router();

router.get('/', middleware, territory.getAll);
router.get('/:id', middleware, territory.get);

export default router;
