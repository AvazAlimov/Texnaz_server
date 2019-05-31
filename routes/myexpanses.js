import { Router } from 'express';
import myexpanse from '../controllers/myexpanse';
import authMiddleware from '../middlewares/auth';
import { validate, check } from '../util/validation/myexpanse';

const router = Router();

router.get('/types', authMiddleware, myexpanse.getAllTypes);
router.get('/forms', authMiddleware, myexpanse.getAllForms);
router.get('/purposes', authMiddleware, myexpanse.getAllPurposes);
router.get('/people', authMiddleware, myexpanse.getAllPeople);

router.post('/types', authMiddleware, myexpanse.createType);
router.post('/forms', authMiddleware, myexpanse.createForm);
router.post('/purposes', authMiddleware, myexpanse.createPurpose);
router.post('/people', authMiddleware, myexpanse.createPerson);

router.post('/types/:id', authMiddleware, myexpanse.updateType);
router.post('/forms/:id', authMiddleware, myexpanse.updateForm);
router.post('/purposes/:id', authMiddleware, myexpanse.updatePurpose);
router.post('/people/:id', authMiddleware, myexpanse.updatePerson);

router.delete('/types/:id', authMiddleware, myexpanse.removeType);
router.delete('/forms/:id', authMiddleware, myexpanse.removeForm);
router.delete('/purposes/:id', authMiddleware, myexpanse.removePurpose);
router.delete('/people/:id', authMiddleware, myexpanse.removePerson);

router.get('/', authMiddleware, myexpanse.getAll);
router.post('/', check, validate, authMiddleware, myexpanse.create);
router.post('/:id', check, validate, authMiddleware, myexpanse.update);
router.delete('/:id', authMiddleware, myexpanse.remove);

export default router;
