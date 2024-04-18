import { z } from "zod";

export const todoFormSchema = z.object({
    title: z
      .string()
      .min(5, {
        message: "title must be at least 5 characters.",
      })
      .max(30, {
        message: "title must not be longer than 30 characters.",
      }),
      body : z 
       .string()
       .max(50 ,{
        message : "body must not be longer than 30 characters.",
       }),

       completed : z .boolean(),

     
  })
  
export   type TodoFormValues = z.infer<typeof todoFormSchema>
  
  // This can come from your database or API.
