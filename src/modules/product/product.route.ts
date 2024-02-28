import express from 'express';
import { verifyJWT } from '../common/middleware';



import { ProductController } from './product.controller';


const router=express.Router()

router.post('/product-create',verifyJWT, ProductController.insertIntoDB)
router.get('/products',  ProductController.GetAllProducts)
router.get('/products/:id', ProductController.GetSingleProduct)
router.patch('/products/update/:id',verifyJWT, ProductController.updateProduct)
router.delete('/products/delete/:id',verifyJWT, ProductController.deleteProduct)



export const ProductRoutes=router