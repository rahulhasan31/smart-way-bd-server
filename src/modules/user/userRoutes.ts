
import  express  from "express";
import { UserController } from "./userController";
import { verifyJWT } from '../common/middleware';



const router=express.Router()

router.get('/all-user',verifyJWT, UserController.getAllUser)
router.get('/user/:email',verifyJWT, UserController.getByEmail)
router.delete('/user/:id',verifyJWT, UserController.deleteById)


export const UserRoutes=router