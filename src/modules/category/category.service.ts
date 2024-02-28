
import {  PrismaClient, Category } from '@prisma/client';





const prisma= new PrismaClient()

const InserIntoDB=async(data:Category):Promise<Category>=>{

    const result = await prisma.category.create({
        data
    })
    return result
}



export const CategorySevice={
    InserIntoDB
}