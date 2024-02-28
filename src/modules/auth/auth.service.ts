import { PrismaClient, User , } from "@prisma/client"
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

const prisma=new PrismaClient()
const createUserDB=async(data:User):Promise<User|any>=>{
    const result= await prisma.user.create({
        data
    })
    return result
}


const getUser=async()=>{
    const result= await prisma.user.findMany()
    return result
}

export async function getUserByEmail(email:string) {
    return prisma.user.findUnique({
      where: {
        email,
      },
    });
  }

export const AuthService={
    createUserDB,
    getUserByEmail,
    getUser
}