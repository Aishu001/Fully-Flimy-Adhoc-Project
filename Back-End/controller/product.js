import db from "../dataBase.js";

export const createCategory = (req, res) => {
    const { name } = req.body;
    const imageUrl = req.file.path; // Get the image path from the uploaded file

    // Use image_url instead of image
    const query = 'INSERT INTO category (name, image_url) VALUES (?, ?)';
    
    db.query(query, [name, imageUrl], (err, results) => {
        if (err) {
            console.error('Error creating category:', err);
            return res.status(500).json({ message: 'Error creating category' });
        }
        res.status(201).json({ message: 'Category created successfully', categoryId: results.insertId });
    });
};


export const getCategory = (req, res) => {
    const query = 'SELECT * FROM category'; // Query to fetch all category data

    db.query(query, (err, results) => {
        if (err) {
            console.error('Error fetching categories:', err);
            return res.status(500).json({ message: 'Error fetching categories' });
        }
        res.status(200).json(results); // Respond with the fetched category data
    });
};


export const createSubCategory = (req, res) => {
    const { sub_name, category_id } = req.body;

    const query = 'INSERT INTO subcategory (sub_name, category_id) VALUES (?, ?)';
    
    db.query(query, [sub_name, category_id], (err, results) => {
        if (err) {
            console.error('Error creating subcategory:', err);
            return res.status(500).json({ message: 'Error creating subcategory' });
        }
        res.status(201).json({ message: 'Subcategory created successfully', subcategoryId: results.insertId });
    });
};

export const getSubCategory = (req, res) => {
    const query = 'SELECT * FROM subcategory'; // Fetch all subcategories

    db.query(query, (err, results) => {
        if (err) {
            console.error('Error fetching subcategories:', err);
            return res.status(500).json({ message: 'Error fetching subcategories' });
        }
        res.status(200).json(results); // Respond with the fetched subcategory data
    });
};

export const createProduct = (req, res) => {
    const { product_name, description, price, stock, subcategory_id } = req.body;
    const product_image = req.file.path;

    const query = 'INSERT INTO product (product_name, description, price, stock, product_image, subcategory_id) VALUES (?, ?, ?, ?, ?, ?)';
    
    db.query(query, [product_name, description, price, stock, product_image, subcategory_id], (err, results) => {
        if (err) {
            console.error('Error creating product:', err);
            return res.status(500).json({ message: 'Error creating product' });
        }
        res.status(201).json({ message: 'Product created successfully', productId: results.insertId });
    });
};

export const getProducts = (req, res) => {
    // Check if there's a subcategory_id in the query params for filtering
    const { subcategory_id } = req.query;
    
    let query = 'SELECT * FROM product';
    let params = [];

    // If a subcategory_id is provided, add it to the query
    if (subcategory_id) {
        query += ' WHERE subcategory_id = ?';
        params.push(subcategory_id);
    }

    db.query(query, params, (err, results) => {
        if (err) {
            console.error('Error fetching products:', err);
            return res.status(500).json({ message: 'Error fetching products' });
        }
        res.status(200).json({ products: results });
    });
};

export const getProductById = (req, res) => {
    const { id } = req.params; // Extract the product ID from the URL

    const query = 'SELECT * FROM product WHERE id = ?';

    db.query(query, [id], (err, results) => {
        if (err) {
            console.error('Error fetching product:', err);
            return res.status(500).json({ message: 'Error fetching product' });
        }

        if (results.length === 0) {
            return res.status(404).json({ message: 'Product not found' });
            }
        res.status(200).json({ product: results[0] });
    });
};



export const getProductBySubCategoryId = (req, res) => {
    const { subcategory_id } = req.params; // Extract subcategory ID from the URL

    const query = 'SELECT * FROM product WHERE subcategory_id = ?';

    db.query(query, [subcategory_id], (err, results) => {
        if (err) {
            console.error('Error fetching products by subcategory:', err);
            return res.status(500).json({ message: 'Error fetching products by subcategory' });
        }

        if (results.length === 0) {
            return res.status(404).json({ message: 'No products found for this subcategory' });
        }

        res.status(200).json({ products: results });
    });
};
