import db from "../dataBase.js";

export const createCustomer = (req, res) => {
    const { name, phone_number, email, address } = req.body;

    // SQL Query to insert the customer details
    const query = 'INSERT INTO customer (name, phone_number, email, address) VALUES (?, ?, ?, ?)';

    db.query(query, [name, phone_number, email, address], (err, results) => {
        if (err) {
            console.error('Error adding customer:', err);
            return res.status(500).json({ message: 'Error adding customer' });
        }

        // Return success response
        res.status(201).json({ message: 'Customer created successfully', customerId: results.insertId });
    });
};

export const creatOrder = (req, res) => {
    
}