import { PrismaClient, Product } from "@prisma/client";


const prisma=new PrismaClient()

const insertIntoDB=async(data:Product):Promise<Product>=>{
    const result= await prisma.product.create({
        data
    })
    return result
}

const GetAllProducts= async(option:any)=>{
    const {sortBy, sortOrder, searchTrem}=option
    const result= await prisma.product.findMany({
      
       orderBy:sortBy && sortOrder ?{
        [sortBy]:sortOrder
       }:{createdAt:"desc"},
       where:{
        OR:[
            {
                name:{
                    contains:searchTrem,
                    mode:"insensitive"
                }
            },
            {
               id:{
                contains:searchTrem,
                mode:"insensitive"
               }
            }
        ]
       }
    })
    return result
}
const GetSingleProduct= async(id:string)=>{
    const result= await prisma.product.findUnique({
     where:{
        id:id
     },
     
    })
    return result
}

const updateProduct=async(id:string,payload:Partial<Product>):Promise<Product>=>{
    const result= await prisma.product.update({
        where:{
            id
        },
        data:payload
    })
    return result

}

const deleteProduct= async(id:string):Promise<Product>=>{
     const result= await prisma.product.delete({
        where:{
            id
        }
     })
     return result;

}

export const ProductService={
    insertIntoDB,
    GetAllProducts,
    GetSingleProduct,
    updateProduct,
    deleteProduct
}