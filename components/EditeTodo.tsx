'use client'
import { zodResolver } from "@hookform/resolvers/zod"
import {  useForm } from "react-hook-form"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button";
import { Pen, Plus } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { TodoFormValues, todoFormSchema } from "@/schema"
import { Input } from "@/components/ui/input"
import { Checkbox } from "@/components/ui/checkbox"
import {  updateTodoAction } from "@/actions/todo.action"
import { useState } from "react"
import Spinner from "@/components/Spinner"
import { ITodos } from "@/interfaces"





const EditTodo =({todo} : {todo :ITodos})=>{
  const [open ,setOpen ] = useState(false)
   const [loading , setLoading] =useState(false)
    const defaultValues: Partial<TodoFormValues> = {
        title:todo.title,
        body : todo.body  as string,
        completed :todo.completed,
        
      }
    const form = useForm<TodoFormValues>({
        resolver: zodResolver(todoFormSchema),
        defaultValues,
        mode: "onChange",
      })

      const onSubmit =(data :TodoFormValues )=>{
        updateTodoAction({id :todo.id ,title :data.title , body : data.body , completed : data.completed } )
        setLoading(true)
        setOpen(false)

      }
     
    return(
        <Dialog open={open} onOpenChange={setOpen} >
        <DialogTrigger asChild>
        <Button size={"icon"} >  <Pen/> </Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Edit profile</DialogTitle>
            <DialogDescription>
              Make changes to your profile here  Click save when you are done.
            </DialogDescription>
          </DialogHeader>
       
          <div className="grid gap-4 py-4">
          <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            <FormField
            control={form.control}
            name="title"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Title</FormLabel>
                <FormControl>
                  <Input placeholder="write your title" {...field} />
                </FormControl>
                <FormDescription>
                 write your title Todo
               </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
            <FormField
            control={form.control}
            name="body"
            render={({ field }) => (
              <FormItem>
                <FormLabel>short discription </FormLabel>
                <FormControl>
                  <Textarea
                    placeholder="Tell us a little bit about your title"
                    className="resize-none"
                    {...field}
                  />
                </FormControl>
                <FormDescription>
                 write your short discription about your todo
               </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />  

          <FormField
            control={form.control}
            name="completed"
            render={({ field }) => (
              <FormItem>
              <div className="flex items-center space-x-2">

                <FormControl>
                <Checkbox     checked={field.value} onCheckedChange={field.onChange}  />
                </FormControl>
               <FormLabel>completed </FormLabel>
               </div>
               <FormDescription>
                your todo item will be uncompleted by default unless you chang it
               </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />  


            {loading ? <Spinner/> :  <Button type="submit">Save changes</Button>}

         

          </form>
          </Form>
  
          </div>
  
        
        </DialogContent>
      </Dialog>
    )
}

export default EditTodo