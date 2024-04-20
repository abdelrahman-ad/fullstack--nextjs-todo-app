import { getTodoAction } from "@/actions/todo.action";
import TodoForm from "@/components/TodoForm";
import { TableDemo } from "@/components/TodoTable";
import { User, auth, currentUser } from "@clerk/nextjs/server";




export default async function Home() {
  const {userId } = auth()
  
  const todos = await getTodoAction({userId})

  const user = await currentUser() 


  
  return (
   
    <main className="container">
           
            {!User ?  "no user here" :(
               <div className="mx-auto flex w-full lg:w-3/4 flex-col justify-center space-y-4 mt-10">
               <TodoForm userId={userId} />
           <TableDemo todos={todos} />
           </div>
            )
            
            
            }
          
          
    </main> 
  );
}
