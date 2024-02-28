
import  express  from "express";
import { UserController } from "./userController";



const router=express.Router()

router.get('/all-user', UserController.getAllUser)
router.get('/user/:email', UserController.getByEmail)
router.delete('/user/:id', UserController.deleteById)


export const UserRoutes=router