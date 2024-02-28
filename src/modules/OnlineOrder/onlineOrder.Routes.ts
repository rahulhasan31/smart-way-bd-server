
import  express  from "express";
import { OnlineOrderController } from "./onlineOrder.Controller";




const router=express.Router()

router.post('/create-order', OnlineOrderController.insertIntoOrder)
router.get('/all-order', OnlineOrderController.getAllOrder)
router.patch('/order-confirm/:id', OnlineOrderController.orderConfirmUpate)
router.delete('/order-delete/:id', OnlineOrderController.fakeOrderDelete)


export const OnlineOrderRoutes=router