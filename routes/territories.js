import { Router } from 'express';

const router = Router();

router.get('/');
router.get('/:id');
router.post('/');
router.post('/:id');
router.delete('/');

export default router;
