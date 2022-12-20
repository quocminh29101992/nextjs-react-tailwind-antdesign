import { useEffect } from 'react';
import { getTodoList } from '../../../services/v1/task'
import React, { useState } from 'react';


export default function Home() {

  const [tasks, setTasks] = useState([]);

  useEffect(() => {

    getTodoList().then(res => res.json()).then(
      (result) => {
        // console.log(result)
        setTasks(result)
      })
  }, [])



  return (
    <>
      {tasks.map(task => (
        <li key={task.id} className='p-4'>id : {task.id} - {task.title} - status :
          {task.completed}
          {task.completed &&
           
             <b>true</b> 
         
          }

          {!task.completed &&
           
              <b>false</b>
         
          }
        </li>
      ))}
    </>
  )
}