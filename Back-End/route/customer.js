import express from 'express';
import { createCustomer, creatOrder } from '../controller/customer.js';

const router = express.Router();

router.route('/createCustomer').post(createCustomer);
router.route('/createOrder').post(creatOrder);

export const customerRouter = router;