import express from 'express';
import { verifyJWT } from '../common/middleware';
import { AddToCartController } from './addtocart.controller';






const router=express.Router()

router.post('/addtocart-create', verifyJWT,AddToCartController.insertIntoDB)
router.post('/decrementAddtocart-create',verifyJWT, AddToCartController.decrementAddTCart)
router.get('/addtocart/:id', verifyJWT,AddToCartController.getUserAddToCart)
router.delete('/addtocart/:id', AddToCartController.deleteAddtoCart)




export const AddToCartRoutes=router