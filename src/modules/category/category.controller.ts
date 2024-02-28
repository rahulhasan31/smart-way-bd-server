import { Request, Response } from "express";
import { CategorySevice } from "./category.service";




const InserIntoDB=async(req:Request, res:Response)=>{

    try{
        const result = await 
          CategorySevice.InserIntoDB(req.body)
        res.send({
            sucess:true,
            message:"user create sucessFully",
            data:result
        })


    }

    catch(err){
        res.send(err)
    }

}

export const CategoryController={
    InserIntoDB
}