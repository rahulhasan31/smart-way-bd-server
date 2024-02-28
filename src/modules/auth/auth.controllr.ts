import { NextFunction, Request, Response } from "express";
import { getUserByEmail, AuthService } from "./auth.service";
import {  generateTokens, hashPassword, refreshAccessToken } from "./authUserService";






const createUserDB= async(req:Request, res:Response,next:NextFunction)=>{
    try{
        const result= await AuthService.createUserDB(req.body)
        res.send({
        sucess:true,
        status:200,
        message:"User create SucessFully",
        data:result
        })
    }
    catch(err){
       next(err)
    }
    
}


export async function registerUser(req: Request, res: Response) {
    const {  email, password } = req.body;
  
    const existingUser = await AuthService.getUserByEmail(email);
  
    if (existingUser) {
      return res.status(400).json({ message: 'Email is already in use' });
    }
  
    const hashedPassword= await hashPassword(password);
  
    const user = await AuthService.createUserDB(req.body);
    const accessToken  = await generateTokens(user);
  
    res.status(201).json({ message: 'User registered successfully', accessToken  });
  }
  
  export async function loginUser(req: Request, res: Response) {
    const { email, password } = req.body;
    console.log(req.body);
    
  
    const user = await getUserByEmail(email);
    console.log(user);
    
  
    if (!user) {
      return res.status(401).json({ message: 'Invalid credentials user' });
    }
  
    // const passwordMatch =password===user.password;
    
  
    // if (!passwordMatch) {
    //   return res.status(401).json({ message: 'Invalid credentials password' });
    // }
  
    const accessToken  = await generateTokens(user);
  
    res.json({ message: 'Login successful', accessToken  });
  }


  export async function refreshUserToken(req: Request, res: Response) {
    const refreshToken = req.body.refreshToken;
   console.log(refreshToken);
   
    try {
      const newAccessToken = await refreshAccessToken(refreshToken);
      res.json({ accessToken: newAccessToken });
    } catch (error) {
      console.error('Error refreshing token:', error);
      res.status(401).json({ message: 'Invalid refresh token' });
    }
  }


export const AuthController={
    createUserDB
}