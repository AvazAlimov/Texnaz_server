import { Router } from 'express';
import sale from '../controllers/sale';
import authMiddleware from '../middlewares/auth';
import { check, validate } from '../util/validation/sale';

const router = Router();
router.get('/', authMiddleware, sale.getAll);
router.get('/paginate', authMiddleware, sale.getWithPagination);
router.get('/items', authMiddleware, sale.getAllItems);
router.get('/:id', authMiddleware, sale.get);
router.post('/', authMiddleware, check, validate, sale.create);
router.post('/:id', authMiddleware, check, validate, sale.update);
router.delete('/:id', authMiddleware, sale.delete);
router.post('/approve/:id', authMiddleware, sale.approve);
router.post('/disapprove/:id', authMiddleware, sale.disapprove);
router.post('/shipment/approve/:id', authMiddleware, sale.approveShipment);
router.post('/shipment/reject/:id', authMiddleware, sale.rejectShipment);
router.post('/saleItem/:id', authMiddleware, sale.updateSaleItem);
router.post('/check/:id', authMiddleware, sale.checkIsClosed);
router.post('/accept/:id', authMiddleware, sale.accept);

export default router;
