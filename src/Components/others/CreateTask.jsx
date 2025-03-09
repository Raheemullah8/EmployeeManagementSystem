
import React, { useContext, useState } from 'react'
import { AuthContext } from '../../Context/ContextProvider';

function CreateTask() {
  const [userdata, setUserdata] = useContext(AuthContext)
  const [taskTitle,setTitle] = useState('');
  const [taskDescription,setDesc] = useState('');
  const [taskDate,setDate] = useState('');
  const [asignTo,setAsignTo] = useState('');
  const [category,setCategory] = useState('');


  const [newTask,setNewTask] = useState({})
  const submitHandler = (e)=>{
    e.preventDefault()
    setNewTask({taskTitle,taskDescription,category,active:false,newTask:true,faild:false,completed:false})
  
    const data = userdata
    
    data.forEach((elm)=>{
      if(asignTo == elm.firstName){
        elm.tasks.push(newTask)
        elm.taskCounts.newTask = elm.taskCounts.newTask+1

      }

    })
    console.log(data)
    
    setTitle('');
    setAsignTo('');
    setDate('');
    setDesc('');
    setCategory('')
   ;
    alert('Task Created Successfully')
  }
  return (
    <div>
        
      {/* Main Container */}
      <div className="w-full h-auto mt-10 bg-[#1c1c1c] p-5 rounded-lg shadow-md">
        <form onSubmit={(e)=>{
          submitHandler(e)
        }} className="flex flex-col gap-5  text-white">
          {/* Left Section */}
          <div className="grid grid-cols-2 gap-5">
            <div>
              <h3 className="font-semibold">Task Title</h3>
              <input
              value={taskTitle}
              onChange={(e)=>{setTitle(e.target.value)}}
                type="text"
                placeholder="Make A UI Design"
                className="w-full p-2 border border-gray-400 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-300"
              />
            </div>

            <div>
              <h3 className="font-semibold">Due Date</h3>
              <input
              value={taskDate}
              onChange={(e)=>{setDate(e.target.value)}}
                type="date"
                className="w-full p-2 border border-gray-400 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-300"
              />
            </div>

            <div>
              <h3 className="font-semibold">AssignTo</h3>
              <input
              value={asignTo}
              onChange={(e)=>{setAsignTo(e.target.value)}}
                type="text"
                placeholder="Enter employee name"
                className="w-full p-2 border border-gray-400 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-300"
              />
            </div>

            <div>
              <h3 className="font-semibold">Category</h3>
              <input
              value={category}
              onChange={(e)=>{setCategory(e.target.value)}}
                type="text"
                placeholder="Design, Dev, etc."
                className="w-full p-2 border border-gray-400 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-300"
              />
            </div>
          </div>

          {/* Description Section */}
          <div>
            <h3 className="font-semibold">Description</h3>
            <textarea
             value={taskDescription}
             onChange={(e)=>{setDesc(e.target.value)}}
              className="w-full p-2 border border-gray-400 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-300"
              rows="4"
              placeholder="Enter task description..."
            ></textarea>
          </div>

          {/* Submit Button */}
          <button className="w-full p-3 bg-emerald-400 text-white font-bold rounded-lg hover:bg-emerald-500 transition duration-200">
            Submit
          </button>
        </form>
      </div>
    </div>
  )
}

export default CreateTask