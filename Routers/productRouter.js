import express from 'express';
import { getAllProduct, productOrderDetails, products } from '../Controllers/productController.js';

const router = express.Router()

router.post('/createProduct',products)
router.get('/getprodetails/:id',productOrderDetails)
router.get('/getallorders',getAllProduct)

export default router;