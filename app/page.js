"use client"
import React, { useState } from 'react'
import Header from '@/Components/Header'

const page = () => {
  const [title, setTitle] = useState('')
  const [desc, setDesc] = useState('')
  const [tasks,setTasks] = useState([])
  let renderTask=<h2 className='font-bold p-10'>No Tasks Available</h2>
  if(tasks.length>0)
  {
    renderTask = tasks.map((elem,i) => {
      return (
        <li className='mb-1 flex justify-between p-2'>
          <div className='flex-col justify-between p-3'>
            <h2 className='font-extrabold text-xl'>{elem.title}</h2>
            <h4 className='font-bold'>{elem.desc}</h4>
          </div>
          <button className='p-2 m-4 bg-red-800 text-white rounded font-bold' onClick={() => {
            deleteHandler(i)
          }}>Delete</button>
        </li> 
        );
    })
  }

  const submitHandler = (e) => {
    e.preventDefault()
    setTitle('')
    setDesc('')
    setTasks([...tasks,{title,desc}])
    console.log(tasks)
  }

  const deleteHandler = (i) => {
    let copyTask=[...tasks]
    copyTask.splice(i,1)
    setTasks(copyTask)
  }

  return (
      <>
        <Header/>
        <form className='justify-evenly' onSubmit={submitHandler}>
          <input type="text" className='text-2xl border-l-purple-950 border-2 m-10 p-1' placeholder='Title' value={title} onChange={(e) => {
            setTitle(e.target.value)
          }}/>
          <input type="text" className='text-2xl border-l-purple-950 border-2 m-10 p-1' placeholder='Description' value={desc} onChange={(e) => {
            setDesc(e.target.value)
          }}/>
          <button className='bg-purple-950 rounded px-7  py-2 text-white text-xl mt-10 font-bold'>Add Task</button>
        </form>
        <hr></hr>
        <div className='bg-purple-200'>
          <ul>{renderTask}</ul>
        </div>
      </>
  )
}

export default page
