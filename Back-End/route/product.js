import express from 'express';
import multer from 'multer';
import { createCategory, createProduct, createSubCategory, getCategory, getProductById, getProductBySubCategoryId, getProducts, getSubCategory } from '../controller/product.js';

const router = express.Router();
// Set up storage for multer
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads/'); // Folder where images will be stored
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + '-' + file.originalname); // Add timestamp to the image name
    }
});
const upload = multer({ storage: storage }).single('image_url');

const uploadProductImage = multer({ storage: storage }).single('product_image');

// Use upload middleware for handling image upload
router.route('/createCategory').post(upload, createCategory);
router.route('/getCategory').get(getCategory);
router.route('/createSubCategory').post(createSubCategory);
router.route('/getSubCategory').get(getSubCategory);
router.route('/addProduct').post(uploadProductImage,createProduct);
router.route('/getProduct').get(getProducts);
router.route('/getProduct/:id').get(getProductById);
router.route('/getProductsBySubCategory/:subcategory_id').get(getProductBySubCategoryId);


export const productRouter = router;  

