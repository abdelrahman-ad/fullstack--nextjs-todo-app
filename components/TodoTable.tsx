'use client'
import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableFooter,
    TableHead,
    TableHeader,
    TableRow,
  } from "@/components/ui/table"
import { ITodos } from "@/interfaces"
import { Badge } from "./ui/badge"
import DeletedTodo from "./DeletedTodo"

  

  
  export   function TableDemo( {todos} :{todos :  ITodos[] }) {
    return (
      <Table>
        <TableCaption>A list of your recent Todos.</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead >id</TableHead>
            <TableHead>title</TableHead>
            <TableHead>completed</TableHead>
            <TableHead className="flex justify-end" >actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {todos.map((invoice) => (
            <TableRow key={invoice?.id}>
              <TableCell className="font-medium">{invoice?.id}</TableCell>
              <TableCell>{invoice?.title}</TableCell>
              <TableCell>{invoice?.completed  ?   <Badge>Completed</Badge> :  <Badge variant="outline">Uncompleted</Badge>}</TableCell>
              <TableCell className="flex items-center space-x-2 justify-end">
 
               <DeletedTodo todo={invoice}   />

               </TableCell>
            </TableRow>
          ))}
        </TableBody>
        <TableFooter>
          <TableRow>
            <TableCell colSpan={3}>Total Todo</TableCell>
            <TableCell className="text-right">{todos.length}</TableCell>
          </TableRow>
        </TableFooter>
      </Table>
    )
  }
  