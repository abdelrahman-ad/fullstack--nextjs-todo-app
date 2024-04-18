import { title } from 'process';
'use server'

import { ITodos } from "@/interfaces";
import { TodoFormValues } from "@/schema";
import { PrismaClient } from "@prisma/client";
import { revalidatePath } from "next/cache";


const prisma = new PrismaClient()

export const getTodoAction = async ({userId} : {userId : string | null} )=>{
   return await prisma.todo.findMany({
      where :{
       user_Id :userId as string
      },
      
      orderBy :{creatAt :"desc"}})
}

export const createTodoAction = async ({title ,body ,completed ,userId } : 
   {title : string , body : string  ,completed : boolean ,userId : string |null })=>{
   return await prisma.todo.create({
      data :{
         title,
         body,
         completed,
         user_Id :userId as string

      }
      
   }),

    revalidatePath('/')
}

export const deleteTodoAction = async ({id} : {id : string} )=>{
   await prisma.todo.delete({
      where : {id}
   })
   revalidatePath('/')
}
export const updateTodoAction = async ({id  ,title ,completed ,body}   : ITodos )=>{
   await prisma.todo.update({
   where :{
      id ,
   },
        data :{
         title,
         completed,
         body
       } 
         
      
   });
   revalidatePath('/')
}