import db from "../dataBase.js";

export const createCustomer = (req, res) => {
    const { name, phone_number, email, address } = req.body;

    
    const query = 'INSERT INTO customer (name, phone_number, email, address) VALUES (?, ?, ?, ?)';

    db.query(query, [name, phone_number, email, address], (err, results) => {
        if (err) {
            console.error('Error adding customer:', err);
            return res.status(500).json({ message: 'Error adding customer' });
        }


        res.status(201).json({ message: 'Customer created successfully', customerId: results.insertId });
    });
};

export const getAllCustomers = (req, res) => {
    const query = 'SELECT * FROM customer';

    db.query(query, (err, results) => {
        if (err) {
            console.error('Error fetching customers:', err);
            return res.status(500).json({ message: 'Error fetching customers' });
        }

        res.status(200).json({ customers: results });
    });
};

export const getCustomerById = (req, res) => {
    const { id } = req.params;

    const query = 'SELECT * FROM customer WHERE id = ?';

    db.query(query, [id], (err, results) => {
        if (err) {
            console.error('Error fetching customer:', err);
            return res.status(500).json({ message: 'Error fetching customer' });
        }

        if (results.length === 0) {
            return res.status(404).json({ message: 'Customer not found' });
        }

        res.status(200).json({ customer: results[0] });
    });
};


export const createOrder = (req, res) => {
    const { customer_id, total_price, payment_mode, items } = req.body; // `items` is an array of products with name, quantity, and price
    
    // First, insert into the orders table
    const orderQuery = 'INSERT INTO orders (customer_id, total_price, payment_mode) VALUES (?, ?, ?)';
    
    db.query(orderQuery, [customer_id, total_price, payment_mode], (err, orderResults) => {
        if (err) {
            console.error('Error creating order:', err);
            return res.status(500).json({ message: 'Error creating order' });
        }

        const orderId = orderResults.insertId; // Get the order ID after insertion

        // Prepare the query for order_items
        const itemQuery = 'INSERT INTO order_items (order_id, product_name, quantity, price) VALUES ?';
        const itemValues = items.map(item => [orderId, item.product_name, item.quantity, item.price]);

        // Insert the items into the order_items table
        db.query(itemQuery, [itemValues], (err, itemResults) => {
            if (err) {
                console.error('Error adding order items:', err);
                return res.status(500).json({ message: 'Error adding order items' });
            }

            res.status(201).json({ message: 'Order created successfully', orderId });
        });
    });
};

export const getOrderById = (req, res) => {
    const { order_id } = req.params; // Extract order ID from the URL
    
    // First query to get the order details
    const orderQuery = 'SELECT * FROM orders WHERE order_id = ?';
    
    db.query(orderQuery, [order_id], (err, orderResults) => {
        if (err) {
            console.error('Error fetching order:', err);
            return res.status(500).json({ message: 'Error fetching order' });
        }

        if (orderResults.length === 0) {
            return res.status(404).json({ message: 'Order not found' });
        }

        // If order exists, fetch order items
        const orderItemsQuery = 'SELECT * FROM order_items WHERE order_id = ?';
        
        db.query(orderItemsQuery, [order_id], (err, itemsResults) => {
            if (err) {
                console.error('Error fetching order items:', err);
                return res.status(500).json({ message: 'Error fetching order items' });
            }

            // Combine order details with items and return as response
            res.status(200).json({
                order: orderResults[0],
                items: itemsResults
            });
        });
    });
};


export const getAllOrders = (req, res) => {
    const query = `
        SELECT 
            o.order_id, 
            o.order_date, 
            o.total_price, 
            o.payment_mode, 
            c.name AS customer_name, 
            i.product_name, 
            i.quantity, 
            i.price
        FROM 
            orders o
        JOIN 
            customer c ON o.customer_id = c.id
        JOIN 
            order_items i ON o.order_id = i.order_id
        ORDER BY o.order_id;
    `;

    db.query(query, (err, results) => {
        if (err) {
            console.error('Error fetching orders:', err);
            return res.status(500).json({ message: 'Error fetching orders' });
        }

        // Group the products by order_id for a cleaner response
        const orders = results.reduce((acc, row) => {
            const { order_id, order_date, total_price, payment_mode, customer_name, product_name, quantity, price } = row;

            // Check if order already exists in accumulator
            if (!acc[order_id]) {
                acc[order_id] = {
                    order_id,
                    order_date,
                    total_price,
                    payment_mode,
                    customer_name,
                    items: []
                };
            }

            // Push product details to the respective order
            acc[order_id].items.push({ product_name, quantity, price });

            return acc;
        }, {});

        res.status(200).json({ orders: Object.values(orders) });
    });
};
