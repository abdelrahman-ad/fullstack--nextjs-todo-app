import { getTodoAction } from "@/actions/todo.action";
import TodoForm from "@/components/TodoForm";
import { TableDemo } from "@/components/TodoTable";
import { auth } from "@clerk/nextjs";




export default async function Home() {
  const {userId} = auth()
  const todos = await getTodoAction({userId})

 

 

  
  return (
   
    <main className="container">
           <TodoForm userId={userId} />
        <TableDemo todos={todos} />
    
    </main> 
  );
}
