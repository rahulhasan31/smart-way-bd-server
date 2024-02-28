import { PrismaClient ,OnlineOrder} from "@prisma/client"

const prisma= new PrismaClient()
const insertIntoOrder= async(data:OnlineOrder):Promise<OnlineOrder>=>{
       const result= await prisma.onlineOrder.create({
             data 
       })
       return result
}

const getAllOrder=async(option:any)=>{
       const {searchTrem,page ,limit} =option
       const skip=parseInt(limit) * parseInt(page) - parseInt(limit)||0
       const take=parseInt(limit)||10
       console.log(skip);
       
     const result= await prisma.onlineOrder.findMany({
       skip,
       take,
       include:{
              user:true
       },
       orderBy:{
              createdAt:"desc"
       },
       where:{
           OR:[
              {
                   id:{
                     contains:searchTrem,
                     mode:'insensitive'
                   }  
                     
              },{
                     productName:{
                            contains:searchTrem,
                            mode:"insensitive"
                     }
              }
           ]   
       }

     })
     return result
}

const orderConfirmUpate=async(id:string, payload:Partial<OnlineOrder>):Promise<OnlineOrder>=>{
       const result= await prisma.onlineOrder.update({
              where:{
                     id
              },
              data:payload
       })
       return result
}

const fakeOrderDelete=async(id:string)=>{
       const result= await prisma.onlineOrder.delete({
              where:{
                     id
              }
       })
       return result
}

export const OnlineOrderService={
       insertIntoOrder,
       getAllOrder,
       orderConfirmUpate,
       fakeOrderDelete
}