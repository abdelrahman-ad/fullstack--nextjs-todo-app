'use client'
import { Pen, Trash } from "lucide-react"
import Spinner from "./Spinner"
import { Button } from "./ui/button"
import { deleteTodoAction } from "@/actions/todo.action"
import { useState } from "react"
import EditTodo from "./EditeTodo"
import { ITodos } from "@/interfaces"



const DeletedTodo =({todo}  : {todo :ITodos})=>{
      const [loading ,setLoading]=useState(false)
    return(
        <div>
            <EditTodo todo={todo} />



            <Button size={"icon"} variant={ "destructive"}  onClick={async ()=>{
                setLoading(true)
                await  deleteTodoAction({id : todo.id}) 
                setLoading(false)
             } } >{loading ?<Spinner/> :   <Trash/>   }     </Button>
                
                
        </div>
    )
}

export default DeletedTodo