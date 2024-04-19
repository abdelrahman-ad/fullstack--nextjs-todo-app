import { getTodoAction } from "@/actions/todo.action";
import TodoForm from "@/components/TodoForm";
import { TableDemo } from "@/components/TodoTable";
import { auth } from "@clerk/nextjs";




export default async function Home() {
  const {userId } = auth()
  
  const todos = await getTodoAction({userId})

 

 

  
  return (
   
    <main className="container">
            <div className="mx-auto flex w-full lg:w-3/4 flex-col justify-center space-y-4 mt-10">

           <TodoForm userId={userId} />

           <TableDemo todos={todos} />
          </div>
    </main> 
  );
}
