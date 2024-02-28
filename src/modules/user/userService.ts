import { PrismaClient } from "@prisma/client"

const prisma=new PrismaClient()

const getAllUser=async()=>{
    const result= await prisma.user.findMany()
    return result
}


const getByEmail= async(email:string)=>{
    const result= await prisma.user.findUnique({
        where:{
            email:email
        },
        include:{
            orders:true
        }
    })
    return result
}

const dleteUserBy=async(id:string)=>{
    const result= await prisma.user.delete({
        where:{
            id
        }
    })
    return result
}



export const UserService={
    getAllUser,
    getByEmail,
    dleteUserBy
}