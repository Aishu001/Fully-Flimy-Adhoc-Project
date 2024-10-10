import express from 'express';
import { createCustomer, createOrder, getAllCustomers, getAllOrders, getCustomerById, getOrderById } from '../controller/customer.js';

const router = express.Router();

router.route('/createCustomer').post(createCustomer);
router.route('/getCustomer').get(getAllCustomers);
router.route('/getCustomer/:id').get(getCustomerById);
router.route('/createOrder').post(createOrder);
router.route('/getOrder/:order_id').get(getOrderById);
router.route('/getAllOrders').get(getAllOrders);



export const customerRouter = router;