import express from 'express';
import { createCustomer } from '../controller/customer.js';

const router = express.Router();


router.route('/createCustomer').post(createCustomer);

router.route('/createOrder').post();

export const customerRouter = router;