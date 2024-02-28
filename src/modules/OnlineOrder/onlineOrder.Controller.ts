import { Request, Response } from "express";
import { OnlineOrderService } from "./onlineOrder.service";



const insertIntoOrder=async(req:Request, res:Response)=>{
    try{
    const data=req.body
    const result=await OnlineOrderService.insertIntoOrder(data)
    res.send({
        sucess:true,
        status:200,
        message:"create order  SuccessFully",
        data:result
    })
    }
    catch(e){
        console.log(e);
        
    }

}
const getAllOrder=async(req:Request, res:Response)=>{
   
    
    try{
        const option=req.query
        console.log(option);
    const result=await OnlineOrderService.getAllOrder(option)
    res.send({
        sucess:true,
        status:200,
        message:"getAll order  SuccessFully",
        data:result
    })
    }
    catch(e){
        console.log(e);
        
    }

}
const orderConfirmUpate=async(req:Request, res:Response)=>{
    const id=req.params.id
    const data=req.body
    try{
  const result= await OnlineOrderService.orderConfirmUpate(id,data)
  res.send({
    sucess:true,
    status:200,
    message:"Order confirm   SuccessFully",
    data:result
})
    }
    catch(err){
        console.log(err);
        
    }
}
const fakeOrderDelete=async(req:Request, res:Response)=>{
    const id=req.params.id
    
    try{
  const result= await OnlineOrderService.fakeOrderDelete(id)
  res.send({
    sucess:true,
    status:200,
    message:"Order Delete   SuccessFully",
    data:result
})
    }
    catch(err){
        console.log(err);
        
    }
}

export const OnlineOrderController={
    insertIntoOrder,
    getAllOrder,
    orderConfirmUpate,
    fakeOrderDelete
}