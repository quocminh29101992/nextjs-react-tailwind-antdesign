import { useEffect } from 'react';
import { getTodoList } from '../../services/v1/task'
import React, { useState } from 'react';
import QRCode from "react-qr-code";
import { useDispatch, useSelector } from "react-redux";
import { getTodoListAction } from '../../redux/slices/taskSlice'


export default function Home() {

  const dispatch = useDispatch();


  const tasks = useSelector((state) => state.tasks.taskList)
  
  useEffect( () => {
    dispatch(getTodoListAction())
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
      {tasks && tasks.map(task => (
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