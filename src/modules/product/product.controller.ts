import { NextFunction, Request, Response } from "express";
import { ProductService } from "./product.service";


const insertIntoDB=async(req:Request, res:Response, next:NextFunction)=>{
   try{
    const result= await ProductService.insertIntoDB(req.body)
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


 const GetAllProducts=async( req:Request, res:Response)=>{
    console.log(req.query);
    const option=req.query
    
          try{
          const result= await ProductService.GetAllProducts(option)
          res.send({
            sucess:true,
            status:200,
            message:"Get Product  SucessFully",
            data:result
        })
          }
          catch(err){
               res.send(err)
          }
 }
 const GetSingleProduct=async(req:Request, res:Response)=>{
          try{
          const result= await ProductService.GetSingleProduct(req.params.id)
          res.send({
            sucess:true,
            status:200,
            message:"Get Single Product  SucessFully",
            data:result
        })
          }
          catch(err){
               res.send(err)
          }
 }
 const updateProduct=async(req:Request, res:Response)=>{
    const id=req.params.id
    const data=req.body
          try{
          const result= await ProductService.updateProduct(id, data)
          res.send({
            sucess:true,
            status:200,
            message:"update  Product  SucessFully",
            data:result
        })
          }
          catch(err){
               res.send(err)
          }
 }
 const deleteProduct=async(req:Request, res:Response,next:NextFunction)=>{
    const id=req.params.id
   
          try{
          const result= await ProductService.deleteProduct(id)
          res.send({
            sucess:true,
            status:200,
            message:"  Product Delete  SucessFully",
            data:result
        })
          }
          catch(err){
            next(err)
          }
 }


export const ProductController={
    insertIntoDB,
    GetAllProducts,
    GetSingleProduct,
    updateProduct,
    deleteProduct
}