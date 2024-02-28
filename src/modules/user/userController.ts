import { Request, Response } from "express";
import { UserService } from "./userService";




const getAllUser=async(req:Request, res:Response)=>{
       try{
         const result= await UserService.getAllUser()
         res.send({
            sucess:true,
            status:200,
            message:"Get User  SucessFully",
            data:result
        })
       }
       catch(e){
        console.log(e);
        
       }
}
const getByEmail=async(req:Request, res:Response)=>{
       try{
        const email=req.params.email
         const result= await UserService.getByEmail(email)
         res.send({
            sucess:true,
            status:200,
            message:"Get User  SucessFully",
            data:result
        })
       }
       catch(e){
        console.log(e);
        
       }
}
const deleteById=async(req:Request, res:Response)=>{
       try{
        const id=req.params.id
         const result= await UserService.dleteUserBy(id)
         res.send({
            sucess:true,
            status:200,
            message:"Get User  SucessFully",
            data:result
        })
       }
       catch(e){
        console.log(e);
        
       }
}



export const UserController={
    getAllUser,
    getByEmail,
    deleteById
}