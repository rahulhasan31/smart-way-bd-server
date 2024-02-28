import express from 'express';
import { loginUser, refreshUserToken, registerUser } from './auth.controllr';



const router=express.Router()



router.post('/register', registerUser);
router.post('/login', loginUser);
router.post('/refresh-token', refreshUserToken);


export const AuthRoutes=router