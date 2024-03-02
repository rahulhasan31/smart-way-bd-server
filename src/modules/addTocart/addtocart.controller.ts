import { NextFunction, Request, Response } from "express"
import { AddToCartService } from "./addtocart.service"



const insertIntoDB=async(req:Request, res:Response, next:NextFunction)=>{
    try{
     const result= await AddToCartService.insertIntoDB(req.body)
     res.send({
         sucess:true,
         status:200,
         message:"Product create SucessFully",
         data:result
     })
 
    }
    catch(err){
     next(err)
    }
 }
 
const decrementAddTCart=async(req:Request, res:Response, next:NextFunction)=>{
    try{
     const result= await AddToCartService.decrementAddTCart(req.body)
     res.send({
         sucess:true,
         status:200,
         message:"Product create SucessFully",
         data:result
     })
 
    }
    catch(err){
     next(err)
    }
 }
 
const getUserAddToCart=async(req:Request, res:Response, next:NextFunction)=>{
    try{
        const id=req.params.id
        console.log(id);
        
     const result= await AddToCartService.getUserAddToCart(id)
     res.send({
         sucess:true,
         status:200,
         message:"Product Get SucessFully",
         data:result
     })
 
    }
    catch(err){
     next(err)
    }
 }
 
const deleteAddtoCart=async(req:Request, res:Response, next:NextFunction)=>{
    try{
        const id=req.params.id
        console.log(id);
        
     const result= await AddToCartService.deleteAddtoCart(id)
     res.send({
         sucess:true,
         status:200,
         message:"Delete SucessFully",
         data:result
     })
 
    }
    catch(err){
     next(err)
    }
 }
const GetSingleCart=async(req:Request, res:Response, next:NextFunction)=>{
    try{
        const id=req.params.id
        console.log(id);
        
     const result= await AddToCartService.GetSingleCart(id)
     res.send({
         sucess:true,
         status:200,
         message:"Single Data SucessFully",
         data:result
     })
 
    }
    catch(err){
     next(err)
    }
 }
const AddtoCartPriceAggregate=async(req:Request, res:Response, next:NextFunction)=>{
    try{
        
        const id=req.params.id
     const result= await AddToCartService.AddtoCartPriceAggregate(id)
     res.send({
         sucess:true,
         status:200,
         message:"Aggregate Data SucessFully",
         data:result
     })
 
    }
    catch(err){
     next(err)
    }
 }
 

export  const  AddToCartController={
    insertIntoDB,
    getUserAddToCart,
    decrementAddTCart,
    deleteAddtoCart,
    GetSingleCart,
    AddtoCartPriceAggregate
}