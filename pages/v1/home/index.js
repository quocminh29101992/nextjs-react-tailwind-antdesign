import { useEffect } from 'react';
import { getTodoList } from '../../../services/v1/task'
import React, { useState } from 'react';
import QRCode from "react-qr-code";


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
    <div className='p-4'>
      <p className='p-4'>
        DEMO QR CODE
      </p>
    <QRCode
            id='qrcode'
            value='https://localhost/product/product_id=1'
            size={290}
            level={'H'}
            // includeMargin={true}
          />
    </div>
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